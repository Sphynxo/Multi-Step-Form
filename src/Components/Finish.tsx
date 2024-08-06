import { TSummaryProps } from "./Forms";
import { TAddOns } from "./Forms";
import ThankYou from "./ThankYou";

const Finish = ({
  yearly,
  summary,
  currentPlan,
  setActiveStep,
  checkedAddOns,
  isConfirmed,
}: {
  yearly: boolean;
  summary: TSummaryProps;
  currentPlan: string;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  checkedAddOns: TAddOns[];
  isConfirmed: boolean;
}) => {
  const totalAmount = summary.planPrice + summary.addOnPrice;

  return (
    <div>
      {!isConfirmed ? (
        <div>
          <div>
            <h1 className="text-[2.4rem] font-bold text-denim">
              Finishing up
            </h1>
            <p className="text-[1.6rem] text-grey mt-[0.8rem]">
              Double-check everything looks OK before confirming.
            </p>
          </div>
          <div>
            <div className="p-[1.6rem] bg-[#F8F9FF] rounded-[8px] mt-[2.2rem]">
              <div className="flex items-center justify-between border-b-[1px] border-b-grey pb-[1.2rem]">
                <div>
                  <p className="text-[1.4rem] text-denim font-semibold">{`${currentPlan} ${
                    yearly ? "(Yearly)" : "(Monthly)"
                  }`}</p>
                  <p
                    className="text-[1.4rem] text-grey underline"
                    onClick={() => setActiveStep(2)}
                  >
                    Change
                  </p>
                </div>
                <p className="text-[1.4rem] font-semibold text-denim">{`$${
                  summary.planPrice
                }/${yearly ? "yr" : "mo"}`}</p>
              </div>
              <div className="mt-[1.2rem]">
                {checkedAddOns ? (
                  <div className="flex flex-col gap-[1.2rem]">
                    {checkedAddOns.map((addOn) => (
                      <div className="flex justify-between">
                        <p className="text-[1.4rem] text-grey">
                          {addOn.name}
                        </p>
                        <p className="text-[1.4rem] text-denim">
                          {yearly
                            ? `+$${addOn.priceYearly}/yr`
                            : `+$${addOn.priceMonthly}/mo`}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-between px-[1.6rem] mt-[2.4rem]">
              <p className="text-[1.4rem] text-grey">{`Total(${
                yearly ? "per year" : "per month"
              })`}</p>
              <p className="text-[1.6rem] text-purple font-bold">{`+$${totalAmount}/${
                yearly ? "yr" : "mo"
              }`}</p>
            </div>
          </div>
        </div>
      ) : (
        <ThankYou />
      )}
    </div>
  );
};

export default Finish;
