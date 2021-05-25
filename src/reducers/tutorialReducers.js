import {
  TUTORIAL_LIST_REQUEST,
  TUTORIAL_LIST_SUCCESS,
  TUTORIAL_LIST_FAIL,
  TUTORIAL_PAGE_REQUEST,
  TUTORIAL_PAGE_SUCCESS,
  TUTORIAL_PAGE_FAIL,
} from "../constants/tutorialConstants";

export const tutorialListReducers = (state = { tutorials: {} }, action) => {
  switch (action.type) {
    case TUTORIAL_LIST_REQUEST:
      return { loading: true, tutorials: {} };

    case TUTORIAL_LIST_SUCCESS:
      return { loading: false, tutorials: action.payload };

    case TUTORIAL_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const tutorialPageReducers = (state = { tutorialPage: {} }, action) => {
  switch (action.type) {
    case TUTORIAL_PAGE_REQUEST:
      return { loading: true, ...state };

    case TUTORIAL_PAGE_SUCCESS:
      return { loading: false, tutorialPage: action.payload };

    case TUTORIAL_PAGE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
