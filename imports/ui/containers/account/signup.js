import { connect } from 'react-redux';
import { submitSignUp, loginClick } from '../../actions/account/signup';
import { facebookLogin } from '../../actions/account/login';
import SignUp from '../../components/account/signup.jsx';

const mapDispatchToProps = (dispatch) => (
  {
    onSubmitSignUp: (data) => {
      dispatch(submitSignUp(data));
    },
    onFacebookSignUp: () => {
      dispatch(facebookLogin());
    },
    onLoginClick: () => {
      dispatch(loginClick());
    },
  }
);

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
