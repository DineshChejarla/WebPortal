import React, { useReducer, useEffect } from "react";

const FETCh_INIT = "FETCh_INIT";
const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCh_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_START:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const MultiState = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const dataHandler = async () => {
    try {
      dispatch({ type: FETCh_INIT });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const newData = await response.json();
      dispatch({ type: FETCH_START, payload: newData });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: "Failed to fetch data." });
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {state.loading && <p>Loading Data...</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state.data && (
        <div>
          {state.data.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiState;
