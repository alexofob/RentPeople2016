import { connect } from 'react-redux';
import { submitResetPwd } from '../../actions/account/reset_password';
import ResetPwd from '../../components/account/reset_pwd.jsx';

const mapDispatchToProps = (dispatch) => (
  {
    onSubmitResetPwd: (data) => {
      dispatch(submitResetPwd(data));
    },
  }
);

export default connect(
  null,
  mapDispatchToProps
)(ResetPwd);
