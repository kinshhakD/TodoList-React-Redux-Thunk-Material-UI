import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'fetch/tasks',
  async () => {
    try {
      console.log('fetching');
      const response = await axios.get('http://localhost:3000/tasks');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteTask = createAsyncThunk(
  'remove/task',
  async (task) => {
    await axios.delete(`http://localhost:3000/tasks/${task.id}`);
    return task;
  },
);

export const addTask = createAsyncThunk(
  'add/task',
  async (task) => {
    const request = await axios.post('http://localhost:3000/tasks/', task);
    return request.data;
  },
);

export const isCompletedTask = createAsyncThunk(
  'completed/task',

  async (task) => {
    await axios.patch(`http://localhost:3000/tasks/${task.id}`, { completed: !task.completed });
    return task;
  },
);
