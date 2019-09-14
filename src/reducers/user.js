import {
  CHANGE_GENDER,
  CHOOSE_SIZE,
  CHOOSE_SIZE_BY_SIZE, CONNECT_LOAD_USER_INFO, FETCH_LOAD_SETTING, GET_DATA,
  GET_MODEL_BY_ID,
  GET_PRODUCTS,
  GET_USER_ID,
  GET_USER_INFO, IS_CHANGE_BOOLEAN
} from "./constants";

const initialState = {
  userInfo: {},
  isLoadUserInfo: false,
  isLoadSetting: false,
  isSaveSetting: false,
  isLoadProducts: false,
  isLoadModels: false,
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
  products: [],
  models: [],
  modelColors: [],
  modelSizes: [],
  productCard: {}
};

export const isChangeBoolean = (field, bool) => {
  return {
    type: IS_CHANGE_BOOLEAN,
    field,
    bool
  }
};

export const getData = (field, data) => {
  return {
    type: GET_DATA,
    field,
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

    case IS_CHANGE_BOOLEAN:
      return {
        ...state,
        [action.field]: action.bool
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

    case GET_DATA:
      return {
        ...state,
        [action.field]: action.data
      }
  }
  return state;
}
