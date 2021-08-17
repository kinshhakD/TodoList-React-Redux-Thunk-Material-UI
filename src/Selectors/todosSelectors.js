import { createSelector } from 'reselect';

export const tasksSelector = (state) => state.tasks.tasks;

export const completedTasksSelector = createSelector(
  (state) => state.tasks.tasks,
  (tasks) => tasks.filter((task) => task.completed),
);

export const notCompletedTasksSelector = createSelector(
  (state) => state.tasks.tasks,
  (tasks) => tasks.filter((task) => !task.completed),
);
