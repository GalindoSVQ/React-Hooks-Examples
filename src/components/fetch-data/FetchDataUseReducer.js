import React, { useReducer, useEffect } from "react";
import axios from "axios";
import http from "../../../api/http";

const initialState = {
  loading: true,
  error: null,
  crags: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        error: null,
        crags: action.payload,
        loading: false
      };
    case "FETCH_ERROR":
      return {
        error: "Something went wrong, ERROR " + action.payload,
        crags: null,
        loading: false
      };
    default:
      return state;
  }
};

function DataFetchTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`${http.defaults.baseURL}api/crags/`)
      .then(res => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ERROR", payload: err.request.status });
      });
  }, []);

  return (
    <div>
      {state.error
        ? state.error
        : state.loading
        ? "LOADING..."
        : state.crags[0].name}
    </div>
  );
}

export default DataFetchTwo;
