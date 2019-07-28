import React from "react";
import HomePage from "./pages/homepage/HomePage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
    <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
        <Route path="/shop/hats" component={HomePage} exact />
        <Route path="/shop/jackets" component={HomePage} exact />
        <Route path="/shop/sneakers" component={HomePage} exact />
        <Route path="/shop/women" component={HomePage} exact />
        <Route path="/shop/men" component={HomePage} exact />

      </Switch>
    </div>
  );
}

export default App;
