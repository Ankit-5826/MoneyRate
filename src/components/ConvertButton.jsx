const ConvertButton = ({ from, to , convertMoney}) => {
  return (
    <div
      className="w-full flex justify-center items-center bg-sky-700 rounded-lg" 
      style={{ padding: "15px 0px" , marginTop: "20px", fontSize: "20px"}}
      onClick={convertMoney}
    >
      <span className="text-white">
          Convert {from} To {to}
      </span>
    </div>
  );
};

export default ConvertButton;
