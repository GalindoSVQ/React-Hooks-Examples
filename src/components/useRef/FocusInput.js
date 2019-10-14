import React, { useRef, useEffect } from "react";

function FocusInput() {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <>
      <input ref={focusRef} type="text" />
    </>
  );
}

export default FocusInput;
