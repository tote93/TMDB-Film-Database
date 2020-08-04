export const initialState = {
  movieSelected: {
    adult: false,
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    id: 475557,
    original_language: "en",
    original_title: "Joker",
    overview:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    popularity: 124.707,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    release_date: "2019-10-02",
    title: "Joker",
    video: false,
    vote_average: 8.2,
    vote_count: 14105,
  },
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
