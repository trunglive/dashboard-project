import {
  PIN_PROJECT,
  EDIT_PROJECT,
  ARCHIVE_PROJECT,
  DELETE_PROJECT,
  SORT_BY_PROJECT_STATUS,
  SORT_BY_BUDGET_TYPE
} from "../actions/actionTypes";

const initialProjectReducer = {};

const projectReducer = (initialProjectReducer, action) => {
  switch (action.type) {
    //...
    default:
      return state;
  }
};

export default projectReducer;
