import { ActionTypes } from '../Actions/Actions';

const initialState = {
  tasks: [{
    id: 1,
    text: 'Изучить JavaScript',
    completed: false,
  },
  {
    id: 2,
    text: 'Изучить паттерны проектирования',
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
        ...state, tasks: action.payload,
      };
    case ActionTypes.SET_POST_TASK:
      return {
        ...state, tasks: [...state.tasks, action.payload],
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
      };
    }
    case ActionTypes.SET_REMOVE_TASK:
      return {
        ...state, tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
};
