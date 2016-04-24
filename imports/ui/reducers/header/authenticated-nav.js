import { OPEN_POP_OVER, SET_ANCHOR_EL, CLOSE_POP_OVER }
  from '../../constants/authenticated-nav';

export const popOverState = (state = false, action) => {
  switch (action.type) {
    case OPEN_POP_OVER:
      return true;
    case CLOSE_POP_OVER:
      return true;
    default:
      return state;
  }
};

export const popOverAnchorEl = (state = { }, action) => {
  switch (action.type) {
    case SET_ANCHOR_EL:
      return action.event.currentTarget;
    default:
      return state;
  }
};
