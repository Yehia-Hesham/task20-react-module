//_index.js_

import React from "react";
import ReactDOM from "react-dom";
import { DisplayText } from "./components/text.js";
import { useState, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  this.displayText = new DisplayText()
  
    return (
       <div className="App">
        <div className="content">
          <input ref={inputRef} type="text" />
          <button onClick={() => setInput(inputRef.current.value)}>Button</button>
          <p>{input}</p>
          <p>{this.displayText(input)}</p>
         </div>
       </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
