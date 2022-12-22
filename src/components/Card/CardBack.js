export function CardBack({ cardInfo }) {
  return (
    <div className="ml-auto flex h-40 w-[80%] max-w-[17.2rem] items-center justify-end rounded-lg bg-cardBackImg bg-cover text-[0.6rem] md:h-56 md:max-w-full md:text-[0.7rem]">
      <p className="mr-4 tracking-widest text-secondaryDark md:mr-12 ">
        {cardInfo.cvv}
      </p>
    </div>
  );
}
