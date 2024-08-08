import PersonalInfo from "./PersonalInfo";
import Plans from "./Plans";
import AddOns from "./AddOns";
import { useState, useEffect } from "react";
import Finish from "./Finish";

export type TAddOns = {
  name: string;
  feature: string;
  priceMonthly: number;
  priceYearly: number;
  checked: boolean;
};

export type TSummaryProps = {
  name: string;
  email: string;
  phone: string;
  planPrice: number;
  addOnPrice: number;
};

export type TErrors = {
  name: boolean;
  email: boolean;
  phone: boolean;
};

const Forms = ({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [yearly, setYearly] = useState<boolean>(false);

  const [currentPlan, setCurrentPlan] = useState<string>("Arcade");

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const [summary, setSummary] = useState({
    name: "",
    email: "",
    phone: "",
    planPrice: 9,
    addOnPrice: 0,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [addOnsArr, setAddOnsArr] = useState<TAddOns[]>([
    {
      name: "Online service",
      feature: "Access to multiplayer games",
      priceMonthly: 1,
      priceYearly: 10,
      checked: false,
    },
    {
      name: "Larger storage",
      feature: "Extra 1TB of cloud save",
      priceMonthly: 2,
      priceYearly: 20,
      checked: false,
    },
    {
      name: "Customizable profile",
      feature: "Custom theme on your profile",
      priceMonthly: 2,
      priceYearly: 20,
      checked: false,
    },
  ]);

  const plansArr = [
    {
      name: "Arcade",
      price: 9,
      image: "/images/icon-arcade.svg",
    },
    {
      name: "Advanced",
      price: 12,
      image: "/images/icon-advanced.svg",
    },
    {
      name: "Pro",
      price: 15,
      image: "/images/icon-pro.svg",
    },
  ];

  useEffect(() => {
    const selectedPlan = plansArr.find(plan => plan.name === currentPlan);
    if (selectedPlan) {
      const newPlanPrice = yearly ? selectedPlan.price * 10 : selectedPlan.price;
      
      const newAddOnPrice = addOnsArr.reduce((total, addOn) => {
        return total + (addOn.checked ? (yearly ? addOn.priceYearly : addOn.priceMonthly) : 0);
      }, 0);
      
      setSummary(prevSummary => ({
        ...prevSummary,
        planPrice: newPlanPrice,
        addOnPrice: newAddOnPrice,
      }));
    }
  }, [yearly, currentPlan, addOnsArr]);

  const handleToggle = () => {
    setYearly(!yearly);
  };

  const handleNextStep = () => {
    if (activeStep < 4) {
      if (summary.name && summary.email && summary.phone) {
        setActiveStep(activeStep + 1);
      } else {
        setErrors({
          ...errors,
          name: !summary.name,
          email: !summary.email,
          phone: !summary.phone,
        });
      }
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleConfirm = () => {
    if (activeStep === 4) {
      setIsConfirmed(!isConfirmed);
    }
  };

  const checkedAddons = addOnsArr.filter((addOn) => addOn.checked);

  return (
    <div className="xl:w-full xl:flex xl:flex-col xl:justify-between">
      <div className="bg-white w-full px-[2.4rem] py-[3.2rem] rounded-[10px] mt-[-7.2rem] mb-[10rem] xl:mt-0 xl:p-0 xl:py-[4rem]">
        {activeStep === 1 && (
          <PersonalInfo
            summary={summary}
            setSummary={setSummary}
            errors={errors}
          />
        )}
        {activeStep === 2 && (
          <Plans
            yearly={yearly}
            handleToggle={handleToggle}
            summary={summary}
            setSummary={setSummary}
            currentPlan={currentPlan}
            setCurrentPlan={setCurrentPlan}
            plansArr={plansArr}
          />
        )}
        {activeStep === 3 && (
          <AddOns
            yearly={yearly}
            summary={summary}
            setSummary={setSummary}
            addOnsArr={addOnsArr}
            setAddOnsArr={setAddOnsArr}
          />
        )}
        {activeStep === 4 && (
          <Finish
            summary={summary}
            yearly={yearly}
            currentPlan={currentPlan}
            setActiveStep={setActiveStep}
            checkedAddOns={checkedAddons}
            isConfirmed={isConfirmed}
          />
        )}
      </div>
      <div
        className={`bottom-0 w-full left-0 ${
          isConfirmed ? "hidden" : "fixed xl:static"
        }`}
      >
        <div
          className={`flex px-[1.6rem] py-[1.6rem] bg-white ${
            activeStep === 1 ? "justify-end" : "justify-between"
          }`}
        >
          <button
            className={`text-[1.4rem] font-semibold text-grey ${
              activeStep === 1 ? "hidden" : "block"
            }`}
            onClick={handlePrevStep}
          >
            Go Back
          </button>
          <button
            className={`text-[1.4rem] px-[1.6rem] py-[1.2rem] rounded-[4px] font-semibold text-white ${
              activeStep === 4 ? "bg-purple" : "bg-denim "
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNextStep();
              handleConfirm();
            }}
          >
            {activeStep === 4 ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
