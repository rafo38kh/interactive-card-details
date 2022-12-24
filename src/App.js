import { useState } from "react";
import { BankCard } from "./components/Card/BankCard";
import { Form } from "./components/Form/Form";
import { Success } from "./components/Success/Success";
import { Footer } from "./components/Footer/Footer";

function App() {
  const initialState = {
    cardNumber: "0000 0000 0000 0000",
    cardHolder: "John Doe",
    expDate: "01/01",
    cvv: "000",
  };

  const [input, setInput] = useState("");
  const [cardInfo, setCardInfo] = useState(initialState);
  const [isConformed, setIsConformed] = useState(false);

  return (
    <div className="grid  min-h-screen grid-rows-[1fr_auto] bg-white bg-bgMobileImg bg-contain bg-no-repeat py-4 xl:bg-bgDesktopImg">
      <div>
        <span className="my-4 hidden w-full text-center tracking-wider text-primary  md:text-[1.6rem] lg:inline-block ">
          Apply For New Credit Card
        </span>
        <div className="mx-auto flex w-11/12 flex-col items-center gap-24 md:gap-0  lg:justify-center lg:gap-40 xl:flex-row">
          <BankCard
            input={input}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
          />
          {isConformed ? (
            <Success />
          ) : (
            <Form
              input={input}
              setInput={setInput}
              setCardInfo={setCardInfo}
              setIsConformed={setIsConformed}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
