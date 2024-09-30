import Image from "next/image";

export default function Organisation()
{
    const cards = [
        {
            bgImage: '/image2.png', // Ensure the correct image path
            title: 'Sélection de votre professeur personnel',
            description: 'Nos professeurs sont enseignants universitaires, doctorants ou jeunes praticiens. Ils ont fait l’objet d’une sélection stricte.',
        },
        {
            bgImage: '/image3.jpg', // Ensure the correct image path
            title: 'Choix du lieu des cours',
            description: 'Nos locaux (5 villes)\nA domicile\nEn visio (distanciel)',
        },
        {
            bgImage: '/image4.png', // Ensure the correct image path
            title: 'Suivi par notre équipe pédagogique',
            description: "Vous pouvez vous appuyer sur le suivi de notre équipe pédagogique. Son rôle est de s'assurer que votre préparation se déroule dans les meilleures conditions.",
        },
    ];
    return(
        <div>
            <p className=" font-family[Arial] text-[48px] font-bold leading-[60px] text-center text-alva-light-blue">Organisation</p>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-8 mt-10">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 w-full sm:w-[300px] text-center h-[550px]">
                        <Image src={card.bgImage} loading='eager'  className=" object-cover rounded-t-lg" alt={card.title} width={300} height={150}/>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-alva-light-blue mb-4 text-left h-[100px]">{card.title}</h3>
                            <p className="text-alva-light-blue text-left leading-relaxed whitespace-pre-line">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}