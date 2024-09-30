interface VerifiezProps {
  heading: string;
  subHeading?: string;
  buttonText: string;
}
export default function Verifiez({
  heading,
  subHeading,
  buttonText,
}: VerifiezProps) {
  return (
    <div className="bg-white flex flex-col justify-center items-center p-[32px] w-full shadow-xl rounded-[12px] md:mt-0 mt-6 text-center max-w-[469px]">
      <p className="font-arial text-[30px] xl:text-[48px] text-alva-light-blue font-bold">
        {heading}
      </p>
      {subHeading && (
        <p className="font-arial text-[20px] xl:text-[32px] font-bold text-alva-light-blue mt-4">
          {subHeading}
        </p>
      )}
      <button className="bg-alva-light-blue mt-6 text-white text-[20px] font-bold text-center w-full rounded-full md:py-2 ">
        {buttonText}
      </button>
    </div>
  );
}
