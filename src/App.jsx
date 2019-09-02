import React, { useEffect } from "react";
import HomePage from "./pages/Home/HomePage.component";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage.component";
import Header from "./components/Header/header.component";
import SignInAndSignup from "./pages/Sign-and-sign-up/sign-and-sign-up.component";
import { connect } from "react-redux";
import { checkUserSession } from "./store/user/user.actions";
import { selectCurrentUser } from "./store/user/user.selectors";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/Checkout/Checkout.component";

const App = ({ checkUserSession, currentUser, collectionsArray }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/login"
          render={() =>
            currentUser ? <Redirect to={"/"} /> : <SignInAndSignup />
          }
          exact
        />
        <Route path="/checkout" component={Checkout} exact />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
