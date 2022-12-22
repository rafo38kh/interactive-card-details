import checkMarkIMG from "../../images/icon-complete.svg";

export function Success() {
  return (
    <div className="mt-16 flex w-full max-w-[25rem] flex-col items-center justify-center">
      <img src={checkMarkIMG} alt="" />
      <h2 className="mt-8 text-3xl uppercase tracking-[0.3rem] text-primary">
        Thank you!
      </h2>
      <p className="mt-4 tracking-widest text-tertiary">
        We've added your card details
      </p>
      <button
        className="mt-8 h-12 w-full rounded-lg bg-primary text-white md:text-xl"
        type="submit"
      >
        Continue
      </button>
    </div>
  );
}
