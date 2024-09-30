import Image from "next/image";
import { plans } from "@/data/plans";

export default function TarifSub()
{
 
    return(
        <div>
            <div className="flex flex-col gap-2 border border-alva-light-blue p-2 md:p-10 rounded-[10px] text-center md:text-left">
                <p className="text-alva-light-blue text-[40px] font-bold mb-10">Préparation aux TDs</p>
          <div className="flex lg:flex-row flex-col md:gap-8 gap-12 justify-center">
            {plans.slice(0, 2).map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center flex-1"
              >
                <div className="flex lg:flex-row flex-col items-center h-1/4">
                  <p className="md:text-[28px] text-[20px] font-semibold text-left text-alva-light-blue mb-4">
                    {plan.title}
                  </p>
                  <Image src={"/benefits.jpg"} className="h-14 ml-2" alt="badge" width={60} height={60} loading='eager' />
                </div>
                <ul className="text-left xl:mb-6 mb-10 h-1/3 ">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-alva-light-blue mb-2 flex items-center font-family[Arial] text-[20px] font-normal leading-[37px] text-left"
                    >
                      <Image src={`/${feature.icon}`} loading='eager'  alt="check" width={15} height={15} className="mr-2"/>
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <div className="text-left mb-6 flex flex-row mt-4 h-1/6">
                  <p className="line-through text-alva-red text-[32px] mr-4">
                    {plan.oldPrice}
                  </p>
                  <p className="text-alva-light-blue text-[40px] font-bold">
                    {plan.newPrice}
                  </p>
                </div>
                <button
                  className={`py-2 px-6 rounded-full font-bold w-full ${plan.buttonColor}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div> 
                <div className=" md:p-10 mt-20 bg-white  text-center md:text-left">
                    <p className="text-alva-light-blue text-[40px] font-bold mb-10">Stages de révision</p>
                <div className="flex lg:flex-row flex-col md:gap-8 gap-12 justify-center">
                {plans.slice(2, 4).map((plan, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 text-center flex-1"
                    >
                    <div className="flex lg:flex-row flex-col items-center h-1/4">
                        <p className="md:text-[32px] text-[20px] font-semibold text-left text-alva-light-blue mb-4">
                        {plan.title}
                        </p>
                        <Image src={"/benefits.jpg"} loading='eager'  className=" ml-2" alt="badge" width={60} height={60}/>
                    </div>
                    <ul className="text-left xl:mb-6 mb-10 h-1/3">
                        {plan.features.map((feature, idx) => (
                        <li
                            key={idx}
                            className="text-alva-light-blue mb-2 flex items-center font-family[Arial] text-[20px] font-normal leading-[37px] text-left"
                        >
            
                            <Image src={`/${feature.icon}`} loading='eager'  alt="check" width={15} height={15} className="mr-2"/>
                            {feature.text}
                        </li>
                        ))}
                    </ul>
                    <div className="text-left mb-6 flex flex-row mt-4 h-1/6">
                        <p className="line-through text-alva-red text-[32px] mr-4">
                        {plan.oldPrice}
                        </p>
                        <p className="text-alva-light-blue text-[40px] font-bold">
                        {plan.newPrice}
                        </p>
                    </div>
                    <button
                        className={`py-2 px-6 rounded-full font-bold w-full ${plan.buttonColor}`}
                    >
                        {plan.buttonText}
                    </button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}