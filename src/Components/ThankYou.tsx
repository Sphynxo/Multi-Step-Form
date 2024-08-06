const ThankYou = () => {
  return (
    <div className="px-[2.4rem] py-[8rem] flex flex-col items-center text-center gap-[2.4rem]">
      <img src="/images/icon-thank-you.svg" alt="" />
      <div>
        <h2 className="text-[2.4rem] text-denim font-bold">Thank you!</h2>
        <p className="text-[1.6rem] text-grey leading-[2.5rem] mt-[1rem]">
          Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please
          feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
