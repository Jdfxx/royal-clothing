import React, { Component } from "react";
import HomePage from "./pages/homepage/HomePage.component";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage.component";
import Header from "./components/header/header.component";
import signInAndSignup from "./pages/sign-and-sign-up/sign-and-sign-up.component";
import "./firebase/firebase.utils";
import { auth } from "./firebase/firebase.utils";

class App extends Component {

  constructor () {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=> { this.setState({currentUser: user})})
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.currentUser} />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/shop" component={ShopPage} exact />
          <Route path="/shop/hats" component={HomePage} exact />
          <Route path="/shop/jackets" component={HomePage} exact />
          <Route path="/shop/sneakers" component={HomePage} exact />
          <Route path="/shop/women" component={HomePage} exact />
          <Route path="/shop/men" component={HomePage} exact />
          <Route path="/login" component={signInAndSignup} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
