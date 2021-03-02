const initHome = {
  food: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_FOOD') {
    return {
      ...state,
      food: action.value,
    };
  }

  return state;
};
