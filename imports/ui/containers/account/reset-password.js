import { connect } from 'react-redux';
import { submitResetPwd } from '../../actions/account/reset_password';
import ResetPwd from '../../components/account/reset_pwd.jsx';

const mapDispatchToProps = (dispatch) => (
  {
    onSubmitResetPwd: () => {
      dispatch(submitResetPwd());
    },
  }
);

export default connect(
  null,
  mapDispatchToProps
)(ResetPwd);
