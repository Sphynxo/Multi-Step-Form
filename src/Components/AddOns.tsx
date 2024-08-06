import { TSummaryProps } from "./Forms";
import { TAddOns } from "./Forms";

const AddOns = ({
  yearly,
  summary,
  setSummary,
  addOnsArr,
  setAddOnsArr,
}: {
  yearly: boolean;
  summary: TSummaryProps;
  setSummary: React.Dispatch<React.SetStateAction<TSummaryProps>>;
  addOnsArr: TAddOns[];
  setAddOnsArr: React.Dispatch<React.SetStateAction<TAddOns[]>>;
}) => {

  const handleCheck = (index: number) => {
    setAddOnsArr((prevAddOnsArr) => {
      const newAddOnsArr = prevAddOnsArr.map((addOn, i) =>
        i === index ? { ...addOn, checked: !addOn.checked } : addOn
      );
      const addOnPrice = newAddOnsArr.reduce((total, addOn) => {
        if (addOn.checked) {
          return (
            total + (yearly ? addOn.priceYearly : addOn.priceMonthly)
          );
        }
        return total;
      }, 0);

      setSummary({ ...summary, addOnPrice });

      return newAddOnsArr;
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-[2.4rem] font-bold text-denim">
          Pick add-ons
        </h1>
        <p className="text-[1.6rem] text-grey mt-[0.8rem]">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-[1.2rem] mt-[2.2rem]">
        {addOnsArr.map((addOn, index) => (
          <label
            key={index}
            htmlFor={`checkbox-${index}`}
            className={`flex px-[1.6rem] py-[1.2rem] justify-between items-center border-[1px] rounded-[4px] cursor-pointer ${
              addOn.checked
                ? "border-purple bg-[#F8F9FF]"
                : "border-[#D6D9E6] bg-white"
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleCheck(index);
            }}
          >
            <div className="flex items-center gap-[1.6rem]">
              <div className="relative">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={addOn.checked}
                  readOnly
                  className="appearance-none w-[2rem] h-[2rem] border-[1px] border-[#D6D9E6] rounded-[4px] flex items-center justify-center checked:bg-purple"
                />
                {addOn.checked && (
                  <img
                    src="/images/check.svg"
                    alt=""
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  />
                )}
              </div>
              <div>
                <p className="text-[1.4rem] font-semibold text-denim">
                  {addOn.name}
                </p>
                <p className="text-[1.4rem] text-grey">
                  {addOn.feature}
                </p>
              </div>
            </div>
            <p className="text-[1.2rem] text-purple">{`$${
              yearly
                ? `${addOn.priceYearly}/yr`
                : `${addOn.priceMonthly}/mo`
            }`}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AddOns;
