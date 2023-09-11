import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("Text Here to Convert to Desire Type");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const convertToUpper = () => {
    let uppValues = text.toUpperCase();
    setText(uppValues);
  };

  const convertToLowers = () => {
    let lowValues = text.toLowerCase();
    setText(lowValues);
  };

  const extraSpaces = () => {
    let str = text;
    let values = str.replace(/\s+/g, " ").trim();
    setText(values);
  };

  const clear = () => {
    setText("");
  };
  return (
    <div>
      <div className="form-group mt-3">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h2>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          name="text"
          onChange={handleChange}
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <div className="buttons">
        <button
          type="button"
          class="btn btn-primary mx-2"
          onClick={convertToUpper}
        >
          Conver UpperCase
        </button>
        <button
          type="button"
          class="btn btn-dark mx-3"
          onClick={convertToLowers}
        >
          Conver LowerCase
        </button>

        <button
          type="button"
          class="btn btn-success mx-3"
          onClick={extraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button type="button" class="btn btn-danger mx-3" onClick={clear}>
          Reset Text
        </button>
      </div>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.split(" ").length}Words and {text.length}charters
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").length} Minuts take to read{" "}
        </p>
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h3>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default TextForm;
