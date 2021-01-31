import { GET_MISSIONS, SET_LOADING, SET_FILTER } from './types/LauncherTypes';
const Reducer = (state, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        missions: action.payload,
        loading: false
      };
    case SET_FILTER:
      return {
        ...state,
        ...action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default Reducer;
