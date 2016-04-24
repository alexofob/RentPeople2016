import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/lib/raised-button';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Divider from 'material-ui/lib/divider';

const SignUp = ({ onFacebookSignUp, onSubmitSignUp, onLoginClick }) => (
  <div>
    <RaisedButton
      secondary
      label="Sign up with Facebook"
      icon={<i className="fa fa-facebook-official fa-inverse"></i>}
      fullWidth
      onTouchTap={onFacebookSignUp}
    />

    <div className="separator">
      <span>or</span>
    </div>

    <Form onValidSubmit={onSubmitSignUp}>

      <FormsyText
        name="firstname"
        required
        validations="isAlphanumeric,minLength:2"
        validationError="This is not a valid name"
        floatingLabelText="First Name"
      />

      <FormsyText
        name="surname"
        validations="isAlphanumeric,isWords"
        validationError="This is not a valid name"
        floatingLabelText="Surname (optional)"
      />

      <FormsyText
        name="email"
        required
        validations="isEmail"
        validationError="This is not a valid email"
        floatingLabelText="Email Address"
      />

      <FormsyText
        name="password"
        required
        validations="minLength:4"
        validationError="Password looks a bit short, try again"
        type="password"
        floatingLabelText="Password"
      />

      <FormsyText
        name="confirmPassword"
        required
        validations="equalsField:password"
        validationError="Passwords do not match"
        type="password"
        floatingLabelText="Confirm Password"
      />

      <div className="login-item">
          <RaisedButton
            type="submit"
            primary
            label="SIGN UP"
          />

      </div>

      <p className="login-item">
        <small>
          By clicking Sign up, you agree to our <a href="#">Privacy Policy</a>
          and <a href="#">Terms of Use</a>
        </small>
      </p>

      <div className="login-item">
        <Divider />
      </div>

      <div className="login-item">
        <small>
          If you already have an account,
          <a href="#" onClick={onLoginClick}>Log in</a>
        </small>
      </div>
    </Form>
  </div>
);

SignUp.propTypes = {
  onSubmitSignUp: PropTypes.func.isRequired,
  onFacebookSignUp: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

export default SignUp;
