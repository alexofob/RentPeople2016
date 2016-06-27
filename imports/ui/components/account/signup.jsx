import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  reduceSpace: {
    marginTop: -20,
  },
  increaseSpace: {
    marginTop: 10,
  },
};

const SignUp = ({ onFacebookSignUp, onSubmitSignUp, onLoginClick }) => (
  <div>
    <RaisedButton
      primary
      label="Sign up with Facebook"
      icon={<FontIcon className="material-icons">account_circle</FontIcon>}
      style={{ width: '100%' }}
      onTouchTap={onFacebookSignUp}
    />

    <div className="separator">
      <span>or</span>
    </div>

    <Form onValidSubmit={(data) => onSubmitSignUp(data)}>

      <FormsyText
        name="firstname"
        required
        validations="isAlphanumeric,minLength:2"
        validationError="This is not a valid name"
        floatingLabelText="First Name"
        style={styles.reduceSpace}
        fullWidth
      />

      <FormsyText
        name="surname"
        validations="isAlphanumeric,isWords"
        validationError="This is not a valid name"
        floatingLabelText="Surname (optional)"
        style={styles.reduceSpace}
        fullWidth
      />

      <FormsyText
        name="email"
        required
        validations="isEmail"
        validationError="This is not a valid email"
        floatingLabelText="Email Address"
        style={styles.reduceSpace}
        fullWidth
      />

      <FormsyText
        name="password"
        required
        validations="minLength:4"
        validationError="Password looks a bit short, try again"
        type="password"
        floatingLabelText="Password"
        style={styles.reduceSpace}
        fullWidth
      />

      <FormsyText
        name="confirmPassword"
        required
        validations="equalsField:password"
        validationError="Passwords do not match"
        type="password"
        floatingLabelText="Confirm Password"
        style={styles.reduceSpace}
        fullWidth
      />

      <RaisedButton
        type="submit"
        secondary
        label="SIGN UP"
        style={styles.increaseSpace}
      />

      <p >
        <small>
          By clicking Sign up, you agree to our <a href="#">Privacy Policy </a> and
          <a href="#"> Terms of Use</a>
        </small>
      </p>

      <Divider />

      <p>
        <small>
          If you already have an account,
          <a href="#" onClick={onLoginClick}> Log in</a>
        </small>
      </p>
    </Form>
  </div>
);

SignUp.propTypes = {
  onSubmitSignUp: PropTypes.func.isRequired,
  onFacebookSignUp: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

export default SignUp;
