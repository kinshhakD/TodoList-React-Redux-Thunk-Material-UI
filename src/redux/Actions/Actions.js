import axios from 'axios';

export const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_TASKS: 'SET_TASKS',
  SET_COMPLETED_TASK: 'SET_COMPLETED_TASK',
  SET_REMOVE_TASK: 'SET_REMOVE_TASK',
  SET_POST_TASK: 'SET_POST_TASK',
  SET_EDITING_TASK: 'SET_EDITING_TASK',
};

export const taskActions = {
  setLoading: (loading) => ({ type: ActionTypes.SET_LOADING, payload: loading }),

  setTasks: (tasks) => ({ type: ActionTypes.SET_TASKS, payload: tasks }),

  setPostTask: (task) => ({ type: ActionTypes.SET_POST_TASK, payload: task }),

  setCompleted: (task) => ({ type: ActionTypes.SET_COMPLETED_TASK, payload: task }),

  setRemoveTask: (task) => ({ type: ActionTypes.SET_REMOVE_TASK, payload: task }),

  setNewTextTask: (task) => ({ type: ActionTypes.SET_EDITING_TASK, payload: task }),

};

export const MiddlewareActions = {
  fetchTasks: () => async (dispatch) => {
    dispatch(taskActions.setLoading(true));
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      dispatch(taskActions.setTasks(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(taskActions.setLoading(false));
    }
  },

  postTask: (task) => async (dispatch) => {
    dispatch(taskActions.setLoading(true));
    try {
      const request = await axios.post('http://localhost:3000/tasks', task);
      dispatch(taskActions.setPostTask(request.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(taskActions.setLoading(false));
    }
  },

  removeTask: (task) => async (dispatch) => {
    dispatch(taskActions.setLoading(true));
    try {
      await axios.delete(`http://localhost:3000/tasks/${task.id}`);
      dispatch(taskActions.setRemoveTask(task));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(taskActions.setLoading(false));
    }
  },

  completedTask: (task) => async (dispatch) => {
    try {
      await axios.patch(`http://localhost:3000/tasks/${task.id}`, { completed: !task.completed });
      dispatch(taskActions.setCompleted(task));
    } catch (error) {
      console.log(error);
    }
  },

  editTask: (task) => async (dispatch) => {
    try {
      await axios.patch(`http://localhost:3000/tasks/${task.id}`, { text: task.newText });
      dispatch(taskActions.setNewTextTask(task));
    } catch (error) {
      console.log(error);
    }
  },
};
