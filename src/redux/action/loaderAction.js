import { GET_Loader, ON_Loader, OFF_Loader } from "../loaderType";

const GetLoader = () => {
  return function (dispatch) {
    dispatch({
      type: GET_Loader,
    });
  };
};

const OnLoader = (req) => {
  return function (dispatch) {
    dispatch({
      type: ON_Loader,
    });
  };
};
const OffLoader = (req) => {
  return function (dispatch) {
    dispatch({
      type: OFF_Loader,
    });
  };
};

export { GetLoader, OnLoader, OffLoader };
