import React, { useState } from "react";

function InputArea(props) {
  //The state is also imported to make things easier
  const [inputText, setInputText] = useState("");

  //we import this function because we it doesn't have many dependencies
  //it only handle the even of the input
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        //but the button onclick is imported using props
        onClick={() => {
          //this take the inputText from the state and passes it to the addItem()
          props.onAdd(inputText);
          //we shall set the field to an empty string
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
