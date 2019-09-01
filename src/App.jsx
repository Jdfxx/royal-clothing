import React, {Component} from "react";
import HomePage from "./pages/Home/HomePage.component";
import "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import ShopPage from "./pages/Shop/ShopPage.component";
import Header from "./components/Header/header.component";
import SignInAndSignup from "./pages/Sign-and-sign-up/sign-and-sign-up.component";
import {connect} from "react-redux";
import {checkUserSession} from "./store/user/user.actions";
import {selectCurrentUser} from "./store/user/user.selectors";
import {createStructuredSelector} from "reselect";
import Checkout from "./pages/Checkout/Checkout.component";
import {selectCollectionsForPreview} from "./store/shop/shop.selector";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       this.props.setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       });
    //     });
    //   } else {
    //     this.props.setCurrentUser(null);
    //   }
    // });
    this.props.checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path='/shop' component={ShopPage} />
            <Route
                path="/login"
                render={() =>
                    this.props.currentUser ? (
                        <Redirect to={"/"}/>
                    ) : (
                        <SignInAndSignup/>
                    )
                }
                exact
            />
            <Route path="/checkout" component={Checkout} exact/>
          </Switch>
        </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    checkUserSession: ()=> dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
