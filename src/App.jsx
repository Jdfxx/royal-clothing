import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/header.component";
import SignInAndSignup from "./pages/Sign-and-sign-up/sign-and-sign-up.component";
import { connect } from "react-redux";
import { checkUserSession } from "./store/user/user.actions";
import { selectCurrentUser } from "./store/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { GlobalStyle } from "./global.styles";
import ErrorBoundry from "./components/ErrorBoundry/ErrorBoundry";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  const lazyHomePage = lazy(() => import("./pages/Home/HomePage.component"));
  const lazyShopPage = lazy(() => import("./pages/Shop/ShopPage.component"));
  const lazyCheckout = lazy(() =>
    import("./pages/Checkout/Checkout.component")
  );

  const LazySingUpSignIn = lazy(() =>
    import("./pages/Sign-and-sign-up/sign-and-sign-up.component")
  );

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundry>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Route path="/" component={lazyHomePage} exact />
            <Route path="/shop" component={lazyShopPage} />
            <Route
              path="/login"
              render={() =>
                currentUser ? <Redirect to={"/"} /> : <LazySingUpSignIn />
              }
              exact
            />
            <Route path="/checkout" component={lazyCheckout} exact />
          </Suspense>
        </ErrorBoundry>
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
