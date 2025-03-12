import { useState } from "react";

const ColorSquare = ({ number }) => {
  const isEventNumber = number % 2 === 0;
  return (
    <div
      style={{
        backgroundColor: isEventNumber ? "red" : "blue",
        width: "100px",
        height: "100px",
        display: "block",
        margin: "auto",
      }}
    ></div>
  );
};

const ReactMemo = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className="container mx-auto justify-content-center text-center">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control border border-gray rounded-md px-2 mt-5 mb-5"
        />
        <ColorSquare number={number} />
      </div>
    </>
  );
};

export default ReactMemo;
