import React, { useState } from "react";

function App() {
  var [input, changeInput] = useState({ fName: "", lName: "" });

  function handleInput(event) {
    changeInput({ ...input, [event.target.name]: event.target.value });
  }

  return (
    <div className="container">
      <h1>
        Hello {input.fName} {input.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleInput}
          placeholder="First Name"
          value={input.fName}
        />
        <input
          name="lName"
          onChange={handleInput}
          placeholder="Last Name"
          value={input.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
