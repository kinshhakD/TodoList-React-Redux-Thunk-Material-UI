import { ActionTypes } from '../Actions/Actions';

const initialState = {
  tasks: [{
    id: 1,
    text: '1',
    completed: false,
  },
  {
    id: 2,
    text: '2',
    completed: false,
  }],
  loading: false,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return {
        ...state, loading: action.payload,
      };
    case ActionTypes.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        completedTasks: action.payload.filter((task) => task.completed),
        notCompletedTasks: action.payload.filter((task) => !task.completed),
      };
    case ActionTypes.SET_POST_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        completedTasks: [...state.completedTasks, action.payload],
        notCompletedTasks: [...state.notCompletedTasks, action.payload],
      };
    case ActionTypes.SET_COMPLETED_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task, completed: !task.completed,
            };
          } return task;
        }),
        completedTasks: state.completedTasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task, completed: !task.completed,
            };
          } return task;
        }),
        notCompletedTasks: state.notCompletedTasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task, completed: !task.completed,
            };
          } return task;
        }),
      };
    }
    case ActionTypes.SET_EDITING_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task, text: action.payload.newText,
            };
          }
          return task;
        }),
        completedTasks: state.completedTasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task, text: action.payload.newText,
            };
          }
          return task;
        }),
        notCompletedTasks: state.notCompletedTasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task, text: action.payload.newText,
            };
          }
          return task;
        }),
      };
    }
    case ActionTypes.SET_REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
        completedTasks: state.completedTasks.filter((task) => task.id !== action.payload.id),
        notCompletedTasks: state.notCompletedTasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};
