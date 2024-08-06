export interface StepsProps {
  activeStep: number;
}

const Steps: React.FC<StepsProps> = ({ activeStep }) => {
  const stepNums = [
    {
      step: 1,
      name: "Your Info",
    },
    {
      step: 2,
      name: "Select plan",
    },
    {
      step: 3,
      name: "Add-ons",
    },
    {
      step: 4,
      name: "summary",
    },
  ];

  return (
    <div>
      <div className="w-full h-[17.2rem] bg-mobile bg-no-repeat bg-cover flex items-start justify-center xl:bg-desktop xl:h-full xl:w-[27.4rem] xl:rounded-[1rem] xl:p-[4rem] xl:justify-start">
        <div className="flex  gap-[1.6rem] xl:flex-col xl:gap-0">
          {stepNums.map((num, index) => (
            <div className="mt-[3.2rem] xl:flex xl:items-center gap-[2.4rem]">
              <div
                className={`text-[1.6rem] font-bold border-[1px] py-[0.8rem] px-[1.6rem] rounded-full  ${
                  activeStep === num.step
                    ? "text-denim bg-[#BEE2FD] border-[#BEE2FD]"
                    : "text-white  border-white"
                }`}
                key={index}
              >
                <p>{num.step}</p>
              </div>
              <div className="hidden xl:flex xl:flex-col xl:justify-between">
                <p className={`text-[1.2rem]  uppercase ${activeStep === num.step ? "text-[#ABBCFF]" : "text-grey"}`}>{`Step ${num.step}`}</p>
                <p className={`text-[1.4rem] uppercase font-bold tracking-[0.1rem] ${activeStep === num.step ? "text-white" : "text-grey"} `}>{num.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
