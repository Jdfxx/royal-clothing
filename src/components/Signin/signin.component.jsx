import React, {Component} from "react";
import FormInput from "../FormInput/form-input.component";
import "./signin.styles.scss";
import CustomButton from "../CustomButton/custom-button.component";
import {googleSigninStart, emailSigninStart} from "../../store/user/user.actions";
import {connect} from 'react-redux';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state;
        this.props.emailSigninStart(email, password);
    };

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="subtitle">Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="email"
                        id="email1"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput
                        type="password"
                        name="password"
                        id="password1"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Submit</CustomButton>
                        <CustomButton type="button" isGoogleSignIn onClick={() => this.props.googleSigninStart()}>
                            Signin with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({email, password}))
});

export default connect(null, mapDispatchToProps)(Signin);
