import { useReducer, useEffect } from "react";

const useLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
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

  return [state, dispatch];
};

export { useLocalStorageReducer };
