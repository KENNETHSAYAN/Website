// actions.js

export const addTask = (newTask) => {
    return {
      type: 'ADD_TASK',
      payload: newTask,
    };
  };
  

// // actions.js
// export const addTask = (task) => ({
//     type: 'ADD_TASK',
//     payload: task
//   });
  