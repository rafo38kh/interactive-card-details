import { useState } from "react";
import { BankCard } from "./components/Card/BankCard";
import { Form } from "./components/Form/Form";
import { Success } from "./components/Success/Success";

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

  console.log(isConformed);

  return (
    <div className="min-h-screen  bg-white bg-bgMobileImg bg-contain bg-no-repeat py-4 xl:bg-bgDesktopImg">
      <span className="my-4 hidden w-full text-center tracking-wider text-primary md:my-12 md:text-[1.6rem] lg:inline-block ">
        Apply For New Credit Card
      </span>
      <div className="mx-auto flex w-11/12 flex-col items-center lg:justify-center lg:gap-40 xl:flex-row">
        <BankCard input={input} cardInfo={cardInfo} setCardInfo={setCardInfo} />
        {!input ? (
          <Form
            input={input}
            setInput={setInput}
            setCardInfo={setCardInfo}
            setIsConformed={setIsConformed}
          />
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
}

export default App;
