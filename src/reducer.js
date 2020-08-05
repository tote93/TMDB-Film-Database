export const initialState = {
  movieSelected: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET__DETAIL_MOVIE":
      return { ...state, movieSelected: action.movie };
    default:
      return state;
  }
};
export default reducer;
