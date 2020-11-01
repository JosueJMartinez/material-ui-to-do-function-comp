import { useState } from "react";

function useInputState(initVal = "") {
  const [input, setInput] = useState(initVal);

  const handleChange = value => {
    setInput(value);
  };

  const clearInput = () => {
    setInput("");
  };

  return [input, handleChange, clearInput];
}

export default useInputState;
