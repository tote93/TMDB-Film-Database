import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app">
      <Banner appTitle="JLGR Movies" />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
      <Row title="Popular Series" fetchUrl={requests.fetchPopularSeries} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
