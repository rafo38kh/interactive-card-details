import { useState } from "react";

export function Form({
  input,
  setInput,
  setCardInfo,
  isConformed,
  setIsConformed,
}) {
  const [error, setError] = useState("");

  function handleChange(e) {
    const checkNameRegexp = /[^a-zA-Z\s]/gi;
    const checkSpaceRegexp = /\s{2}/g;

    if (checkNameRegexp.test(e.target.value)) {
      setIsConformed(false);
      return setError("Only letters!!!");
    }
    if (e.target.value.match(checkSpaceRegexp)) {
      setIsConformed(false);
      return setError("Only one space allowed!!!");
    }
    setInput(e.target.value);
    setError("");
  }

  const formatCardNumber = (value) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, "");
    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(" ")
    );
  };

  function formatDate() {
    const date = new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "numeric",
    });

    return `${date.slice(0, 2)}/${+date.slice(5, 7) + 5}`;
  }

  function generateNumber() {
    const numbers = Math.random().toFixed(16).split(".")[1];
    const cvvNumbers = Math.random().toFixed(3).split(".")[1];
    setCardInfo((prevState) => ({
      ...prevState,
      cardNumber: formatCardNumber(numbers),
      cvv: cvvNumbers,
      expDate: formatDate(),
    }));
  }

  return (
    <div className="mt-16 w-full max-w-[25rem] md:mt-32">
      <label className=" flex flex-col">
        <span
          className="mb-2 text-xs  uppercase tracking-widest
         text-primary"
        >
          Cardholder Name
        </span>
        <input
          value={input}
          onChange={handleChange}
          maxLength={26}
          type="text"
          className="h-12 rounded-lg border-[0.1rem] border-secondaryDark text-xl outline-none focus:border-primaryLight md:text-2xl"
        />
        <span className="mt-1 text-errorColor">{error}</span>

        <button
          className="mt-6 h-12 rounded-lg bg-primary text-white md:text-xl"
          type="submit"
          onClick={generateNumber}
        >
          Generate card
        </button>

        <button
          className="mt-6 h-12 rounded-lg bg-primary text-white md:text-xl"
          type="submit"
          // onClick={() => setIsConformed(true)}
        >
          Confirm
        </button>
      </label>
    </div>
  );
}
