import React from "react";

const InputSearch = ({ setInputSearch }) => {
  const handleChange = (e) => {
    setInputSearch(e.target.value.trim());
  };

  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" />
    </div>
  );
};

export default InputSearch;
