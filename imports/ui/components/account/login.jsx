import React, { PropTypes } from 'react';
import { Form } from 'formsy-react';
import RaisedButton from 'material-ui/lib/raised-button';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Divider from 'material-ui/lib/divider';

const Login = ({ onFacebookLogin, onSubmitLogin, onResetPwdClick, onSignUpClick }) => (
  <div>

    <RaisedButton
      secondary
      label="Log in with Facebook"
      icon={<i className="fa fa-facebook-official fa-inverse"></i>}
      fullWidth
      onTouchTap={onFacebookLogin}
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
      />

      <FormsyText
        name="password"
        required
        validations="minLength:4"
        validationError="Password looks a bit short, try again"
        type="password"
        floatingLabelText="Password"
      />

      <div className="login-item">
        <span>
          <RaisedButton
            type="submit"
            primary
            label="LOG IN"
          />
        </span>
        <span id="forgot-password">
          <a href="#" onClick={onResetPwdClick}>
            <small>Forgot Password?</small>
          </a>
        </span>
      </div>

      <div className="login-item">
        <Divider />
      </div>

      <div className="login-item">
        <small>
          Don't have an account? <a href="#" onClick={onSignUpClick}>Sign up</a>
        </small>
      </div>
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
