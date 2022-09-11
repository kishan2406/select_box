import React, { useState } from "react";
import Select from "react-select"
import AsyncSelect from 'react-select/async'
import "./App.css";

function App() {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
    { value: "black", label: "Black" },
    { value: "pink", label: "Pink" },
  ];

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <div className="App">
      <h2 style={{color:"#1E90FF"}}>Choose your color</h2>
      <div className="dropdown-container">
        <Creatable 
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}

export default App;
