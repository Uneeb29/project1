import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import clientPromise from "@/utils/clientPromise";
import axios from "axios";

const mongoUrl = process.env.MONGODB_URI;

if (!mongoUrl) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

interface ContactDetails {
  name: string;
  email: string;
  phone: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
    return;
  }
  
  if (req.method === "POST") {
    console.log(req.body)
    const { name, email, phone }: ContactDetails = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let client: MongoClient | null = null;

    try {
      if (!mongoUrl) {
        throw new Error("MONGODB_URI environment variable is not defined");
      }


      client = new MongoClient(mongoUrl, {});
      await client.connect();

      const db = client.db("mission_master");
      const collection = db.collection("book_calls");
      await collection.insertOne({ name, email, phone });

      const response = await axios.post(
        "https://hooks.zapier.com/hooks/catch/9204448/2692y1p/",
        [{
          email: email,
          name: name,
          phone: phone
        }]
      )

      res.status(200).json({ message: "Contact details saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while saving the contact details" });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
