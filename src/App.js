import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="shop/hats" component={HomePage} exact />
        <Route path="shop/jackets" component={HomePage} exact />
        <Route path="shop/sneakers" component={HomePage} exact />
        <Route path="shop/women" component={HomePage} exact />
        <Route path="shop/men" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
