import { connect } from 'react-redux';
import { submitLogin, facebookLogin, resetPwdClick, signUpClick }
  from '../../actions/account/login';
import Login from '../../components/account/login.jsx';

const mapDispatchToProps = (dispatch) => (
  {
    onSubmitLogin: () => {
      dispatch(submitLogin());
    },
    onFacebookLogin: () => {
      dispatch(facebookLogin());
    },
    onResetPwdClick: () => {
      dispatch(resetPwdClick());
    },
    onSignUpClick: () => {
      dispatch(signUpClick());
    },
  }
);

export default connect(
  null,
  mapDispatchToProps
)(Login);
