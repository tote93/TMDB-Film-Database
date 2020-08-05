import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchNav from "./components/SearchNav";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/detail">
            <SearchNav />
            <Detail />
          </Route>
          <Route exact path="/search">
            <SearchNav />
            <Search />
          </Route>
          <Route exact path="/">
            <SearchNav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
