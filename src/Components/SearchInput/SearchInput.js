import React from "react";

import "./SearchInput.css";

function SearchInput({textInput,setTextInput}) {

  function handleChange (text) {
    setTextInput(text);
  };

  return (
    <div className="component-search-input">
      <div>
        <input title="FilterInput" value={textInput} onChange={(e) => { handleChange(e.target.value) }} />
      </div>
    </div>
  );
}

export default SearchInput
