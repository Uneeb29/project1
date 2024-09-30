import Verifiez from "./Verifiez";

export default function EgaliteSub() {
  return (
    <div className="flex md:flex-row flex-col w-full bg-[#FDFDFD] p-5 shadow mt-20 items-center">
      <div className="flex flex-col mr-4 items-center">
        <p className="font-arial text-[20px] xl:text-[48px] font-bold text-alva-light-blue">
          Notre programme égalité des chances
        </p>
        <div className="text-left h-full w-full mt-10">
          <p className="font-arial text-[14px] xl:text-[20px]  text-alva-light-blue">
            Soucieux d'accorder une même chance à chaque étudiant, nous
            permettons aux étudiants boursiers, de bénéficier d'une réduction
            allant de 10% à la gratuité de nos offres.
          </p>
        </div>
      </div>
      <Verifiez
        heading="25,369 €"
        buttonText="Postuler"
        subHeading="Montant des aides accordées depuis 2019"
      />
    </div>
  );
}
