import React from "react";
import {  Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Orderpage from "./components/pages/Orderpage";
import WrongPage from "./components/pages/WrongPage";




export default function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/order">
          <Orderpage />
        </Route>
        <Route path="*">
          <WrongPage />
        </Route>
      </Switch>
    </main>
  );
}
