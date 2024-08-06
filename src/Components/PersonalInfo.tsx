import { TErrors, TSummaryProps } from "./Forms";

const PersonalInfo = ({
  summary,
  setSummary,
  errors,
}: {
  summary: TSummaryProps;
  setSummary: React.Dispatch<React.SetStateAction<TSummaryProps>>;
  errors: TErrors;
}) => {
  const handleChange = (e: {
    target: { name: string; value: string };
  }) => {
    setSummary({ ...summary, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h1 className="text-[2.4rem] font-bold text-denim">
          Personal info
        </h1>
        <p className="text-[1.6rem] text-grey mt-[0.8rem]">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="mt-[2.2rem] xl:w-full">
        <div>
          <div className="flex justify-between">
            <label htmlFor="name" className="text-[1.2rem]">
              Name
            </label>
            {errors.name && (
              <span className="text-[1.2rem] text-[#EE374A] font-bold">
                This field is required
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            name="name"
            value={summary.name}
            className={`w-full border-[1px] ] rounded-[4px] text-[1.5rem] py-[1.2rem] px-[1.6rem] mt-[0.4rem] outline-[#483EFF] ${
              errors.name ? "border-[#EE374A]" : "border-[#D6D9E6"
            }`}
            onChange={handleChange}
          />
        </div>

        <div className="mt-[1.6rem]">
          <div className="flex justify-between">
            <label htmlFor="email" className="text-[1.2rem]">
              Email Address
            </label>
            {errors.email && (
              <span className="text-[1.2rem] text-[#EE374A] font-bold">
                This field is required
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            name="email"
            value={summary.email}
            className={`w-full border-[1px] ] rounded-[4px] text-[1.5rem] py-[1.2rem] px-[1.6rem] mt-[0.4rem] outline-[#483EFF] ${
              errors.email ? "border-[#EE374A]" : "border-[#D6D9E6"
            }`}
            onChange={handleChange}
          />
        </div>

        <div className="mt-[1.6rem]">
          <div className="flex justify-between">
            <label htmlFor="phone" className="text-[1.2rem]">
              Phone Number
            </label>
            {errors.phone && (
              <span className="text-[1.2rem] text-[#EE374A] font-bold">
                This field is required
              </span>
            )}
          </div>
          <input
            type="number"
            placeholder="e.g. +1 234 567 890"
            id="phone"
            name="phone"
            value={summary.phone}
            className={`w-full border-[1px] ] rounded-[4px] text-[1.5rem] py-[1.2rem] px-[1.6rem] mt-[0.4rem] outline-[#483EFF] ${
              errors.name ? "border-[#EE374A]" : "border-[#D6D9E6"
            }`}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
