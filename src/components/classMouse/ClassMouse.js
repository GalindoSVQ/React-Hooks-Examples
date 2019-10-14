import React, { useState, useEffect } from "react";

function ClassMouse() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const logMousePosition = e => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect call");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      <p>X - {x}</p>
      <p>Y - {y}</p>
    </div>
  );
}

export default ClassMouse;
