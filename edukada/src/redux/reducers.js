// reducers.js
const initialState = {
    tasks: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  