import React, { useState } from "react";
import "./form.css";

function Form(props) {
  const [input1, setInput1] = useState(props.input1Value);
  const [input2, setInput2] = useState(props.input2Value);

  function handleInput1(event) {
    setInput1(event.target.value);
  }

  function handleInput2(event) {
    setInput2(event.target.value);
  }

  return (
    <div className="form">
      <label>{props.input1Name}</label>
      <input type={props.input1Type} value={input1} onChange={handleInput1} />
      <label>{props.input2Name}</label>
      <input type={props.input2Type} value={input2} onChange={handleInput2} />
      <button onClick={() => props.buttonHandler(input1, input2)}>
        {props.buttonName}
      </button>
    </div>
  );
}

export default Form;

export function BigForm(props) {
  const [input1, setInput1] = useState(props.input1Value);
  const [input2, setInput2] = useState(props.input2Value);

  function handleInput1(event) {
    setInput1(event.target.value);
  }

  function handleInput2(event) {
    setInput2(event.target.value);
  }

  return (
    <div className="form">
      <label>{props.input1Name}</label>
      <input type={props.input1Type} value={input1} onChange={handleInput1} />
      <label>{props.input2Name}</label>
      <textarea value={input2} onChange={handleInput2} />
      <button onClick={() => props.buttonHandler(input1, input2)}>
        {props.buttonName}
      </button>
    </div>
  );
}

export function RegisterForm(props) {
  const [input1, setInput1] = useState(props.input1Value);
  const [input2, setInput2] = useState(props.input2Value);
  const [input3, setInput3] = useState(props.input3Value);

  function handleInput1(event) {
    setInput1(event.target.value);
  }

  function handleInput2(event) {
    setInput2(event.target.value);
  }

  function handleInput3(event) {
    setInput3(event.target.value);
  }

  return (
    <div className="form">
      <label>{props.input1Name}</label>
      <input type={props.input1Type} value={input1} onChange={handleInput1} />
      <label>{props.input2Name}</label>
      <input type={props.input2Type} value={input2} onChange={handleInput2} />
      <label>{props.input3Name}</label>
      <input type={props.input3Type} value={input3} onChange={handleInput3} />
      <button onClick={() => props.buttonHandler(input1, input2, input3)}>
        {props.buttonName}
      </button>
    </div>
  );
}
