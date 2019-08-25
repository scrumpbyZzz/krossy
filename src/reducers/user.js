import {CHANGE_GENDER, CHOOSE_SIZE, CHOOSE_SIZE_BY_SIZE, GET_MODEL_BY_ID, GET_USER_INFO} from "./constants";





const initialState = {
  userInfo: {
    // id: 18554184
    id: 1234
  },
  sizeChart: [
    {
      id: 1,
      size: "38",
      isSelected: false
    },
    {
      id: 2,
      size: "38.5",
      isSelected: false
    },
    {
      id: 3,
      size: "39",
      isSelected: false
    },
    {
      id: 4,
      size: "39.5",
      isSelected: false
    },
    {
      id: 5,
      size: "40",
      isSelected: false
    },
    {
      id: 6,
      size: "40.5",
      isSelected: false
    },
    {
      id: 7,
      size: "41",
      isSelected: false
    },
    {
      id: 8,
      size: "41.5",
      isSelected: false
    },
    {
      id: 9,
      size: "42",
      isSelected: false
    },
    {
      id: 10,
      size: "42.5",
      isSelected: false
    }
  ],
  gender: '',
  models: []
};

export const getModelsById = (data) => {
  return {
    type: GET_MODEL_BY_ID,
    data
  }
};

export const getUserInfo = (data) => {
  return {
    type: GET_USER_INFO,
    data
  }
};

export const onChangeGender = (value) => {
  return {
    type: CHANGE_GENDER,
    value
  }
};

export const onChooseSize = (id) => {
  return {
    type: CHOOSE_SIZE,
    id
  }
};

export const onChooseSizeBySize = (size) => {
  return {
    type: CHOOSE_SIZE_BY_SIZE,
    size
  }
};

export function user(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENDER:
      return {
        ...state,
        gender: action.value
      };

    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.data
      };

    case CHOOSE_SIZE:
      const tempById = state.sizeChart.map(item =>
        (item.id === action.id) ? {...item, isSelected: !item.isSelected} : item);
      return {
        ...state,
        sizeChart: tempById
      };

    case CHOOSE_SIZE_BY_SIZE:
      const tempBySize = state.sizeChart.map(item =>
        (item.size === action.size) ? {...item, isSelected: !item.isSelected} : item);
      return {
        ...state,
        sizeChart: tempBySize
      };

    case GET_MODEL_BY_ID:
      return {
        ...state,
        models: action.data
      }
  }
  return state;
}
