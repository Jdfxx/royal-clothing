import React, {Component} from "react";
import HomePage from "./pages/homepage/HomePage.component";
import "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage.component";
import Header from "./components/Header/header.component";
import SignInAndSignup from "./pages/sign-and-sign-up/sign-and-sign-up.component";
import "./firebase/firebase.utils";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {connect} from "react-redux";
import {setUser} from "./store/user/user.actions";

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.props.setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            } else {
                this.props.setCurrentUser(null);
            }
        });
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
                    <Route path="/shop" component={ShopPage} exact/>
                    <Route path="/shop/hats" component={HomePage} exact/>
                    <Route path="/shop/jackets" component={HomePage} exact/>
                    <Route path="/shop/sneakers" component={HomePage} exact/>
                    <Route path="/shop/women" component={HomePage} exact/>
                    <Route path="/shop/men" component={HomePage} exact/>
                  <Route path="/login" render={() => this.props.currentUser ? <Redirect to={'/'}/> : <SignInAndSignup/>}
                         exact/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setUser(user))
});

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
