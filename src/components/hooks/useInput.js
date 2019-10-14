import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value);
    }
  };
  const reset = () => {
    setValue("");
  };

  return [value, bind, reset];
}

export default useInput;
