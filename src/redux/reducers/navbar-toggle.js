const initialState = {
  toggle: false
};

const navbarToggle = (state = initialState.toggle, action) => {
  switch (action.type) {
    case "toggle-searchbar":
      return !state;
    default:
      return state;
  }
};
export default navbarToggle;
