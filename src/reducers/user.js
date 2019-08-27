import {
  CHANGE_GENDER,
  CHOOSE_SIZE,
  CHOOSE_SIZE_BY_SIZE, CONNECT_LOAD_USER_INFO, FETCH_LOAD_SETTING,
  GET_MODEL_BY_ID,
  GET_PRODUCTS,
  GET_USER_ID,
  GET_USER_INFO
} from "./constants";

const initialState = {
  userInfo: {},
  isLoadSetting: false,
  isLoadUserInfo: false,
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
    },
    {
      id: 11,
      size: "43",
      isSelected: false
    },
    {
      id: 12,
      size: "43.5",
      isSelected: false
    },
    {
      id: 13,
      size: "44",
      isSelected: false
    },
    {
      id: 14,
      size: "44.5",
      isSelected: false
    },
    {
      id: 15,
      size: "45",
      isSelected: false
    }
  ],
  gender: 'male',
  products: []
};

export const isLoadUserInfo = (bool) => {
  console.log(bool)
  return {
    type: CONNECT_LOAD_USER_INFO,
    bool
  }
}

export const isLoadSetting = (bool) => {
  return {
    type: FETCH_LOAD_SETTING,
    bool
  }
}

export const getProducts = (data) => {
  return {
    type: GET_PRODUCTS,
    data
  }
};

export const getUserInfo = (data) => {
  console.log(data)
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

    case CONNECT_LOAD_USER_INFO:
      return {
        ...state,
        isLoadUserInfo: action.bool
      };

    case FETCH_LOAD_SETTING:
      return {
        ...state,
        isLoadSetting: action.bool
      };

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

    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data
      }
  }
  return state;
}
