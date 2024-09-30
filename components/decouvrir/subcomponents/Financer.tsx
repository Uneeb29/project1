import Verifiez from "./Verifiez"
import Image from "next/image"


export default function Financer()
{
    const cards = [
        {
            img:"/image8.jpg",
            text:"En fonction de vos crédits disponibles,100% de votre abonnement peut être pris en charge par votre CPF."
        },
        {
            img:"/image8.jpg",
            text:"Si les cours ont lieu à votre domicile, vous bénéficiez d'une réduction de 50% du prix payé."
        }
    ]
    return(
        <div className="flex md:flex-row flex-col w-full bg-[#FDFDFD] p-5 shadow mt-20 items-center">
            <div className="flex flex-col mr-4 items-center">
                <p className="font-arial text-[20px] xl:text-[48px] font-bold text-alva-light-blue md:text-left md:w-full">Faites financer de 50 à 100%*</p>
                <div className="flex md:flex-row flex-col justify-between md:items-start items-center h-full md:text-start mt-10">
                    {cards.map((card,index)=>(
                    <div className="flex flex-col gap-8 items-center w-1/2">
                        <Image src={card.img} alt="formation" loading='eager' width={80} height={80}/>
                        <p className="text-alva-light-blue text-[20px] text-center">{card.text}</p>
                    </div>
                ))}
                </div>
            </div>
            <Verifiez heading="Vérifiez votre éligibilité" buttonText="Prendre RDV"/>
        </div>
    )
}