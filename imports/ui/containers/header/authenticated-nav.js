import { connect } from 'react-redux';
import { openPopOver, closePopOver, setAnchorEl }
  from '../../actions/header/authenticated-nav';
import AuthenticatedNavigation from '../../components/header/authenticated_nav';

const mapStateToProps = (state) => (
  {
    openPopOver: state.popOverState,
    anchorEl: state.popOverAnchorEl,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClickDropDown: (event) => {
      dispatch([openPopOver(), setAnchorEl(event)]);
    },
    onRequestClose: () => {
      dispatch(closePopOver());
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedNavigation);
