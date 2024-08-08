import { TSummaryProps } from "./Forms";

const Plans = ({
  yearly,
  handleToggle,
  setSummary,
  currentPlan,
  setCurrentPlan,
  plansArr
}: {
  yearly: boolean;
  handleToggle: () => void;
  summary: TSummaryProps;
  setSummary: React.Dispatch<React.SetStateAction<TSummaryProps>>;
  currentPlan: string;
  setCurrentPlan: React.Dispatch<React.SetStateAction<string>>;
  plansArr: { name: string, price: number, image: string }[];
}) => {

  const handlePlan = (planName: string) => {
    const selectedPlan = plansArr.find(
      (plan) => plan.name === planName
    );
    if (selectedPlan) {
      setCurrentPlan(planName);
      setSummary(prevSummary => ({
        ...prevSummary,
        planPrice: yearly
          ? selectedPlan.price * 10
          : selectedPlan.price,
      }));
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[2.4rem] font-bold text-denim">
          Select your plan
        </h1>
        <p className="text-[1.6rem] text-grey mt-[0.8rem]">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex flex-col gap-[1.2rem] mt-[2.2rem] xl:flex-row xl:gap-0 xl:justify-between">
        {plansArr.map((plan, index) => (
          <div
            key={index}
            className={`flex gap-[1.4rem] items-center p-[1.6rem] border-[1px]  rounded-[8px] ${
              plan.name === currentPlan
                ? "bg-[#F8F9FF] border-purple"
                : "bg-white border-[#D6D9E6]"
            } xl:flex-col xl:px-[1.6rem] xl:py-[2rem] xl:gap-[4rem] xl:w-[30%] xl:items-start`}
            onClick={() => handlePlan(plan.name)}
          >
            <img src={plan.image} alt="" />
            <div>
              <h2 className="text-[1.6rem] text-denim font-semibold">
                {plan.name}
              </h2>
              <p className="text-[1.4rem] text-grey">{`$${
                yearly ? `${plan.price * 10}/yr` : `${plan.price}/mo`
              }`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-[1.6rem] justify-center mt-[2.4rem] py-[1.4rem] bg-[#F8F9FF] rounded-[8px] xl:mt-[3.2rem]">
        <p
          className={`text-[1.4rem] font-semibold ${
            yearly ? "text-grey" : "text-denim"
          }`}
        >
          Monthly
        </p>
        <label className="relative inline-block w-[3.8rem] h-[2.4rem]">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0"
            checked={yearly}
            onChange={handleToggle}
          />
          <span
            className={`slider block absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-denim rounded-full transition-colors`}
          ></span>
          <span
            className={` dot absolute left-[5px] top-[5px] w-[1.4rem] h-[1.4rem] bg-white rounded-full transition-transform ${
              yearly ? "transform translate-x-6" : ""
            }`}
          ></span>
        </label>
        <p
          className={`text-[1.4rem] font-semibold ${
            !yearly ? "text-grey" : "text-denim"
          }`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default Plans;
