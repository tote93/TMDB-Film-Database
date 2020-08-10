import React from "react";
import Row from "../components/Row";
import requests from "../requests";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Banner appTitle="My Movies" />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies} />
      <Row title="Popular Series" fetchUrl={requests.fetchPopularSeries} />
      <Row title="Family" fetchUrl={requests.fetchFamily} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default Home;
