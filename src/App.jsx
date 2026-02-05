import { useEffect, useState } from "react";
import "./App.css";
import InputBox from "./components/inputBox";
import ConvertButton from "./components/convertButton";
import useFatchCurrencyInfo from "./hooks/useFatchCurrencyInfo";

function App() {
  let imgUrl =
    "https://images.unsplash.com/photo-1568581357391-c71a1675ef93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrencySelected, setFromCurrencySelected] = useState("USD");
  const [toCurrencySelected, setToCurrencySelected] = useState("INR");

  const allCurrencyInfo = useFatchCurrencyInfo(fromCurrencySelected);
  const convert = () => {
    console.log(fromAmount, toAmount, fromCurrencySelected, toCurrencySelected);
    const conversionValue = allCurrencyInfo[toCurrencySelected];
    console.log(conversionValue);
    const newconversionValue = (fromAmount * conversionValue).toFixed(3);
    setToAmount(newconversionValue);
  };

  const swap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCurrencySelected(toCurrencySelected);
    setToCurrencySelected(fromCurrencySelected);
  };
  return (
    <>
      <div
        className="h-screen w-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-2xl rounded-2xl border-2 border-white flex flex-col justify-center items-center"
          style={{
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          }}
        >
          <InputBox
            inputLabel="From"
            amount={fromAmount}
            onAmountChange={(e) => {
              setFromAmount(e.target.value);
            }}
            onOptionChange={(e) => {
              setFromCurrencySelected(e.target.value);
            }}
            currency={fromCurrencySelected}
            options={Object.keys(allCurrencyInfo)}
          />
          <div
            className="bg-sky-700 border-2 border-white rounded-lg text-white"
            style={{ padding: "5px 10px", margin: "-15px 0px", zIndex: "10" }}
          >
            Swap
          </div>
          <InputBox
            inputLabel="To"
            amount={toAmount}
            onAmountChange={(e) => {
              setToAmount(e.target.value);
            }}
            onOptionChange={(e) => {
              setToCurrencySelected(e.target.value);
            }}
            currency={toCurrencySelected}
            options={Object.keys(allCurrencyInfo)}
            isAmountDisable={true}
          />
          <ConvertButton
            from={fromCurrencySelected.toUpperCase()}
            to={toCurrencySelected.toUpperCase()}
            convertMoney={convert}
          />
        </div>
      </div>
    </>
  );
}

export default App;
