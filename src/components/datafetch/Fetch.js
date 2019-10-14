import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
  const [crags, setcrags] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then(result => {
        setcrags(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {crags.map(crag => (
          <li key={crag.id}> {crag.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fetch;
