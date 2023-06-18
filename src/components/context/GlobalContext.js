import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
/*Initial State*/
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
//Create Context Data
export const GlobalContext = createContext(initialState);
//Function To Provide Context Data
const GlobalProvider = (props) => {
  //Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        movieDispatch: dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

//Function To Consume Context Data : Create Custum Hook
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
