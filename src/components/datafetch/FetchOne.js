import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchOne() {
  const [post, setPost] = useState({});
  const [option, setOption] = useState(null);
  const [bottomclic, setBottomclic] = useState(null);

  const handlerClick = () => {
    setBottomclic(option);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${bottomclic}`)
      .then(result => {
        setPost(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [bottomclic]);
  return (
    <div>
      <input
        type="text"
        value={option}
        onChange={e => {
          setOption(e.target.value);
        }}
      />
      <button onClick={handlerClick} value={bottomclic}>
        CLICK ME
      </button>
      {post.title}
    </div>
  );
}

export default FetchOne;
