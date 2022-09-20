import { GET_TABS, ADD_TAB, CLOSE_TAB } from "../tabType";
const initState = {
  data: [],
};

const TabReducer = (state = initState, action) => {
  const findIndexById = (id, objects) => {
    let index = -1;
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };
  const findIndexByComponent = (component, id, objects) => {
    let index = -1;
    for (let i = 0; i < objects.length; i++) {
      if (objects[i].component === component && objects[i].id < 99999) {
        index = i;
        break;
      }
    }

    return index;
  };
  switch (action.type) {
    case GET_TABS: {
      return { data: action.payload };
    }
    case ADD_TAB: {
      if (
        findIndexByComponent(
          action.payload.component,
          action.payload.id,
          state.data
        ) !== -1
      ) {
        return { data: [...state.data] };
      }

      if (findIndexById(action.payload.id, state.data) !== -1) {
        state.data.splice(findIndexById(action.payload.id, state.data), 1);
      }
      state.data.unshift(action.payload);

      return { data: [...state.data] };
    }
    case CLOSE_TAB: {
      if (findIndexById(action.payload.id, state.data) !== -1) {
        state.data.splice(findIndexById(action.payload.id, state.data), 1);
      }
      state.data.pop(action.payload);

      return { data: [...state.data] };
    }

    default:
      return state;
  }
};

export default TabReducer;
