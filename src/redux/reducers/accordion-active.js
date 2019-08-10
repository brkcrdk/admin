const initialState = {
  activeIndex: -1
};

const accordionActiveIndex = (state = initialState.activeIndex, action) => {
  switch (action.type) {
    case "toggle-activeIndex":
      return action.payload;
    default:
      return state;
  }
};
export default accordionActiveIndex;
