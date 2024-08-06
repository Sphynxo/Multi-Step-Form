import Steps from "./Components/Steps";
import Forms from "./Components/Forms";
import { useState } from "react";

function App() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <>
      <main className="px-[1.6rem] xl:px-[25rem] xl:flex xl:items-center xl:justify-center xl:h-screen ">
        <div className="xl:flex xl:w-full xl:h-[63rem] xl:bg-white xl:p-[1.6rem] xl:rounded-[1.5rem] xl:gap-[10rem] xl:pr-[10rem]">
          <Steps activeStep={activeStep} />
          <Forms
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        </div>
      </main>
    </>
  );
}

export default App;
