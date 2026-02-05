import { useState, useEffect } from "react";

const useFatchCurrencyInfo = (baseCurrency) => {
  let fatchUrl = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(fatchUrl)
      .then((res) => res.json())
      .then((res) => setData(res.rates));
  }, [baseCurrency]);
  return data;
};

export default useFatchCurrencyInfo;
