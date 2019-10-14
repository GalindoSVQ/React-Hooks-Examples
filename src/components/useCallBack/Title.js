import React, { memo } from "react";

function Title() {
  console.log("TITLE COMPONENT RENDER");
  return <h1>CALL TITLE</h1>;
}

export default memo(Title);
