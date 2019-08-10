const initialState = {
  toggle: false
};

const sidebarToggle = (state = initialState.toggle, action) => {
  switch (action.type) {
    case "toggle-sidebar":
      return !state;
    default:
      return state;
  }
};
export default sidebarToggle;
