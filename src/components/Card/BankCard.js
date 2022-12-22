import React from "react";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";

export function BankCard({ input, cardInfo, setCardInfo }) {
  return (
    <div className="w-full max-w-[32rem] xl:flex xl:flex-col-reverse">
      <span className="my-4 inline-block w-full text-center tracking-wider text-secondaryDark md:my-12 md:text-[1.6rem] lg:hidden ">
        Apply For New Credit Card
      </span>
      <CardBack cardInfo={cardInfo} />
      <CardFront input={input} cardInfo={cardInfo} />
      {/* <span className="my-4 hidden w-full text-center tracking-wider text-tertiary md:my-12 md:text-[1.6rem] lg:inline-block ">
        Apply For New Credit Card
      </span> */}
    </div>
  );
}

// export default BankCard;
