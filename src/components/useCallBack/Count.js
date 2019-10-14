import React, { memo } from "react";

function Count({ text, count }) {
  console.log(`Renderin Count Componen ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default memo(Count);
