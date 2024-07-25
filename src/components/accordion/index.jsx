import React, { useState } from "react";
import accordionData from "./data";

const Accordian = () => {
  const [clickedItem, setClickedItem] = useState(0);
  const [multiple, setMultiple] = useState([]);
  const [multipleEnable, setMultipleEnable] = useState(false);

  const toggleMultiple = () => {
    setMultipleEnable(!multipleEnable);
  };

  const handleClick = (selectedItem) => {
    setClickedItem(selectedItem === clickedItem ? null : selectedItem);
  };

  const handleMultiple = (selectedItem) => {
    const copyMultiple = [...multiple];
    const selectedIndex = copyMultiple.indexOf(selectedItem);
    selectedIndex === -1
      ? copyMultiple.push(selectedItem)
      : copyMultiple.splice(selectedIndex, 1);
    setMultiple(copyMultiple);
  };

  return (
    <div>
      <div>
        <button
          onClick={toggleMultiple}
          style={{
            backgroundColor: "darkblue",
            width: "250px",
            marginBottom: "50px",
          }}
        >
          Enable Multi Selection
        </button>
      </div>
      {accordionData.map((data) => (
        <div style={{ backgroundColor: "brown", width: "500px" }}>
          <div
            className="question"
            key={data.id}
            onClick={
              multipleEnable
                ? () => handleMultiple(data.id)
                : () => handleClick(data.id)
            }
          >
            {data.question}
            {multipleEnable === true && multiple.indexOf(data.id) !== -1 ? (
              <div
                className="answer"
                style={{ marginTop: "10px", marginBottom: "50px" }}
              >
                {data.answer}
              </div>
            ) : null}

            {multipleEnable === false && clickedItem === data.id ? (
              <div
                className="answer"
                style={{ marginTop: "10px", marginBottom: "50px" }}
              >
                {data.answer}
              </div>
            ) : (
              <div style={{ marginTop: "10px", marginBottom: "50px" }}>+</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
