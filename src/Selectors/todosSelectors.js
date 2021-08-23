import { createSelector } from 'reselect';

export const tasksSelector = (state) => state.tasks.tasks;

export const searchValueSelector = (state) => state.tasks.search;

export const completedTasksSelector = createSelector(
  (state) => state.tasks.tasks,
  (tasks) => tasks.filter((task) => task.completed),
);

export const notCompletedTasksSelector = createSelector(
  (state) => state.tasks.tasks,
  (tasks) => tasks.filter((task) => !task.completed),
);

export const searchTasksSelector = createSelector(
  (state) => state.tasks.tasks,
  (state) => state.tasks.search,
  (tasks, search) => search && tasks.filter(({ text }) => text.startsWith(search)),
);
