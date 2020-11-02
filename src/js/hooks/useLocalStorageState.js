import { useState, useEffect } from "react";

const useLocalStorageState = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    let initVal;
    try {
      initVal = JSON.parse(
        localStorage.getItem(key) || String(defaultVal)
      );
    } catch (error) {
      initVal = defaultVal;
    }
    return initVal;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
