import React, { useState } from "react";

export function CardFront({ input, cardInfo }) {
  return (
    <div className="-mt-[4.3rem] flex h-40 w-[80%]  max-w-[17.2rem]  flex-col justify-between  rounded-lg bg-cardFrontImg p-4 md:mt-[1.7rem] md:h-56 md:max-w-full md:p-8 lg:my-10">
      <div className="align-center flex items-center justify-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-secondaryDark md:h-10 md:w-10"></div>
        <div className="h-4 w-4 rounded-full border-[2px] border-solid border-tertiary bg-transparent md:h-5 md:w-5"></div>
      </div>

      <div className="text-lg text-secondaryDark md:text-[1.6rem]">
        <div className=" w-full tracking-widest md:flex md:flex-col md:gap-5">
          <span className="inline-block">{cardInfo.cardNumber}</span>
          <div className="flex justify-between text-[0.6rem] text-secondaryDark md:text-[0.8rem]">
            <h1 className="uppercase">{input ? input : cardInfo.cardHolder}</h1>
            <span>{cardInfo.expDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
