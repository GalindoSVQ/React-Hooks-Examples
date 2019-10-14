import React, { useState, useEffect } from "react";
import axios from "axios";
import http from "../../../api/http";

function FetchData() {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${http.defaults.baseURL}api/crags/dac22484-5440-488a-ac36-d30292eb3130/`
      )
      .then(res => {
        setData(res.data.name);
        setError("");
        setLoading(false);
      })
      .catch(err => {
        setError("Something went wrong!!");
        setData(null);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? "Loading..." : data}
      {error ? error : null}
    </div>
  );
}

export default FetchData;
