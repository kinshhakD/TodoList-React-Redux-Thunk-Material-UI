import axios from 'axios';

export const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_TASKS: 'SET_TASKS',
  SET_COMPLETED_TASK: 'SET_COMPLETED_TASK',
};

export const taskActions = {
  setLoading: (loading) => ({ type: ActionTypes.SET_LOADING, payload: loading }),

  setTasks: (tasks) => ({ type: ActionTypes.SET_TASKS, payload: tasks }),

  setCompleted: (task) => ({ type: ActionTypes.SET_COMPLETED_TASK, payload: task }),
};

export const MiddlewareActions = {

  fetchTasks: () => (dispatch) => {
    dispatch(taskActions.setLoading(true));

    try {
      axios.get('http://localhost:3000/tasks').then((response) => {
        dispatch(taskActions.setTasks(response.data));
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(taskActions.setLoading(false));
    }
  },

  postTask: (task) => (dispatch) => {
    dispatch(taskActions.setLoading(true));

    try {
      axios.post('http://localhost:3000/tasks', task)
        .then(() => dispatch(MiddlewareActions.fetchTasks()));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(taskActions.setLoading(false));
    }
  },

  removeTask: (task) => (dispatch) => {
    dispatch(taskActions.setLoading(true));
    try {
      axios.delete(`http://localhost:3000/tasks/${task.id}`)
        .then(() => dispatch(MiddlewareActions.fetchTasks()));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(taskActions.setLoading(false));
    }
  },

  completedTask: (task) => (dispatch) => {
    try {
      axios.patch(`http://localhost:3000/tasks/${task.id}`, { completed: !task.completed })
        .then(() => dispatch(taskActions.setCompleted(task)));
    } catch (error) {
      console.log(error);
    }
  },

  editTask: (task) => (dispatch) => {
    try {
      axios.patch(`http://localhost:3000/tasks/${task.id}`, { text: task.newText })
        .then(() => dispatch(MiddlewareActions.fetchTasks()));
    } catch (error) {
      console.log(error);
    }
  },
};
