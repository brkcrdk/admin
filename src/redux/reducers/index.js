import { combineReducers } from "redux";
import navbarToggle from "./navbar-toggle";
import sidebarToggle from "./sidebar-toggle";
import accordionActiveIndex from "./accordion-active";
const allReducers = combineReducers({
  navbarToggle,
  sidebarToggle,
  accordionActiveIndex
});

export default allReducers;
