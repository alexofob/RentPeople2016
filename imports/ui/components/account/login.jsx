import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/RaisedButton';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  increaseSpace: {
    marginTop: 10,
  },
};

const Login = ({ onFacebookLogin, onSubmitLogin, onResetPwdClick, onSignUpClick }) => (
  <div>

    <RaisedButton
      primary
      label="Log in with Facebook"
      icon={<FontIcon className="material-icons">account_circle</FontIcon>}
      onTouchTap={onFacebookLogin}
      style={{ width: '100%' }}
    />

    <div className="separator">
      <span>or</span>
    </div>

    <Form onValidSubmit={(data) => onSubmitLogin(data)}>

      <FormsyText
        name="email"
        required
        validations="isEmail"
        validationError="This is not a valid email"
        floatingLabelText="Email Address"
        fullWidth
      />

      <FormsyText
        name="password"
        required
        validations="minLength:4"
        validationError="Password looks a bit short, try again"
        type="password"
        floatingLabelText="Password"
        fullWidth
      />

      <div style={styles.increaseSpace}>
        <span>
          <RaisedButton
            type="submit"
            secondary
            label="LOG IN"
          />
        </span>
        <span id="forgot-password">
          <a href="#" onClick={onResetPwdClick}>
            <small>Forgot Password?</small>
          </a>
        </span>
      </div>

      <Divider style={styles.increaseSpace} />

      <p>
        <small>
          Don't have an account? <a href="#" onClick={onSignUpClick}>Sign up</a>
        </small>
      </p>
    </Form>
  </div>
);

Login.propTypes = {
  onSubmitLogin: PropTypes.func.isRequired,
  onFacebookLogin: PropTypes.func.isRequired,
  onResetPwdClick: PropTypes.func.isRequired,
  onSignUpClick: PropTypes.func.isRequired,
};

export default Login;
