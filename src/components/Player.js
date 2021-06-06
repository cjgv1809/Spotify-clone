import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player-body">
        <Router>
          <Sidebar spotify={spotify} />
          <Switch>
            <Route path="/search">
              <Search spotify={spotify} />
            </Route>
            <Route path="/" exact>
              <Body spotify={spotify} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
