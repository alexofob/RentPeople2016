import { OPEN_POP_OVER, SET_ANCHOR_EL, CLOSE_POP_OVER }
  from '../../constants/authenticated-nav';

export function openPopOver() {
  return {
    type: OPEN_POP_OVER,
  };
}

export function setAnchorEl(event) {
  return {
    type: SET_ANCHOR_EL,
    event,
  };
}

export function closePopOver() {
  return {
    type: CLOSE_POP_OVER,
  };
}
