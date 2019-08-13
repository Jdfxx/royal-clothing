import React, {Component} from "react";
import HomePage from "./pages/homepage/HomePage.component";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage.component";
import Header from "./components/header/header.component";
import signInAndSignup from "./pages/sign-and-sign-up/sign-and-sign-up.component";
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
                    <Route path="/login" component={signInAndSignup} exact/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setUser(user))
});

export default connect(
    null,
    mapDispatchToProps
)(App);
