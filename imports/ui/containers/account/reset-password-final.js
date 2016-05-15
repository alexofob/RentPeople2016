import { connect } from 'react-redux';
import { handleResetPwd } from '../../actions/account/reset_password';
import ResetPwdFinal from '../../components/account/reset_pwd_final.jsx';

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    onResetPwd: (data) => {
      dispatch(handleResetPwd(data, ownProps.params.token));
    },
  }
);

export default connect(
  null,
  mapDispatchToProps
)(ResetPwdFinal);
