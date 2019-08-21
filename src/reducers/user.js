import {CHANGE_GENDER} from "./constants";


const initialState = {
  userId: '',
  gender: 'male',
  size: []
};

export const onChangeGender = (value) => {
  return {
    type: CHANGE_GENDER,
    value
  }

};

export function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENDER:
      return {
        ...state,
        gender: action.value
      }
  }
  return state;
}
