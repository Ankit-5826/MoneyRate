const InputBox = ({
  inputLabel,
  amount,
  onAmountChange,
  onOptionChange,
  currency,
  options = [],
  isAmountDisable = false,
}) => {
  return (
    <>
      <div
        className="bg-white rounded-md w-full flex justify-between items-center"
        style={{ padding: "20px" }}
      >
        <div className="flex flex-col" style={{ width: "50%" }}>
          <label htmlFor="curencyAmount">{inputLabel}</label>
          <input
            min={0}
            type="number"
            value={amount}
            style={{
              marginTop: "15px",
              padding: "5px",
              background: "none",
              outline: "none",
              width: "100%",
            }}
            placeholder="Enter Amount"
            onChange={onAmountChange}
            disabled={isAmountDisable}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="curencyAmount">Currency</label>
          <select
            value={currency}
            onChange={onOptionChange}
            style={{
              marginTop: "15px",
              padding: "5px",
              background: "none",
              outline: "none",
            }}
          >
            {options.map((curr) => {
              return (
                <option key={curr} value={curr}>
                  {" "}
                  {curr.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
