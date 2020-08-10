const API_KEY = "5ecc73b79478ec517848a64e6e2a6df1";

const requests = {
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularSeries: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearchMovie: `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`,
};
export default requests;
