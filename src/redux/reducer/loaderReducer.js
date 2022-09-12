import { GET_Loader, ON_Loader, OFF_Loader } from "../loaderType";
const initState = {
  isLoading: false,
};

const LoaderReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_Loader: {
      return state;
    }
    case ON_Loader: {
      return { isLoading: true };
    }
    case OFF_Loader: {
      return { isLoading: false };
    }

    default:
      return state;
  }
};

export default LoaderReducer;
