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
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          name="text"
          onChange={handleChange}
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
    </div>
  );
};

export default TextForm;
