import { useState } from "react";

function useToggleState(initVal = true) {
  const [toggle, setToggle] = useState(initVal);

  const handleToggle = () => {
    setToggle(prevState => !prevState);
  };

  return [toggle, handleToggle];
}

export default useToggleState;
