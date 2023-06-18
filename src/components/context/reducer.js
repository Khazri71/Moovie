import * as actions from "./ActionTypes";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };

    case actions.ADD_MOVIE_WATCHED:
      return {
        watched: [action.payload, ...state.watched],
        watchlist: state.watchlist.filter(
          (mo) => mo.imdbID !== action.payload.imdbID
        ),
      };

    case actions.REMOVE_MOVIE_FROM_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (mov) => mov.imdbID !== action.payload
        ),
      };

    case actions.REMOVE_MOVIE_FROM_WATCHED:
      return {
        ...state,
        watched: state.watched.filter((mo) => mo.imdbID !== action.payload),
      };

    case actions.MOVE_MOVIE_FROM_WATCHED_TO_WATCHLIST:
      return {
        watched: state.watched.filter(
          (mo) => mo.imdbID !== action.payload.imdbID
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    default:
      return state;
  }
};
