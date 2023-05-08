import React from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = this.state

    try {
      await signInWithEmailAndPassword(auth, (email, password))
      this.setState({ email: "", password: "" });
    } catch(error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({[name]: value}) //This dynamically pulls in the value of the input field that is being filled in. For example, the name that is being filled in will be dynamic (either name or password, depending on which input field the user is making use of) and the value will also be dynamic. If [name ] is password, it will point to the password and then point to the value that is being inputed
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" required />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
          
        </form>
      </div>
    );
  }
}

export default SignIn;
