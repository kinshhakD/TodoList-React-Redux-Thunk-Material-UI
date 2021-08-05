import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  fetchTasks, deleteTask, addTask, isCompletedTask,
} from './asyncThunk';

const initialTasksState = {
  tasks: [],
  loading: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {

    newTask: (state, action) => ({ ...state, tasks: [...state.tasks, action.payload] }),
    completedTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task, completed: !task.completed,
          };
        }
        return task;
      });
    },
    deleteTaskFrom: (state, action) => {
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    // fetchTasks
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
    });
    // deleteTask
    builder.addCase(deleteTask.pending, (state, action) => {
      console.log('started-pending delete');
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => ({
      ...state, tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    }));
    builder.addCase(deleteTask.rejected, (state, action) => {
      console.log('end-rejected');
    });
    // addTask
    builder.addCase(addTask.pending, (state, action) => {
      console.log('adding started');
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      console.log('adding done');
      return {
        ...state, tasks: [...state.tasks, action.payload],
      };
    });
    builder.addCase(addTask.rejected, (state, action) => {
      console.log('adding rejected');
    });
    // isCompletedTask
    builder.addCase(isCompletedTask.pending, (state, action) => {
      console.log('isCompleted pending');
    });
    builder.addCase(isCompletedTask.fulfilled, (state, action) => ({
      ...state,
      tasks: state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task, completed: !task.completed,
          };
        }
        return task;
      }),
    }));
    builder.addCase(isCompletedTask.rejected, (state, action) => {
      console.log('isCompleted rejected');
    });
  },
});

export const { newTask, completedTask, deleteTaskFrom } = tasksSlice.actions;

export default tasksSlice.reducer;
