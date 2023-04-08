const initState = {
  popular: [],
  newGames: [],
  opcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

//ACTION CREATOR
const fetchGames = (userData) => {
  return {
    type: "FETCH_GAMES",
  };
};

export default gamesReducer;
