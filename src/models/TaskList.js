import Task from "./Task";

export default class TaskList {
  tasks;
  constructor() {
    this.tasks = [];
  }

  addTask() {
    for (let task of arguments) {
      if (task instanceof Task) {
        this.tasks.push(task);
      } else {
        throw new TypeError(`${task} is not a valid Task object`);
      }
    }
  }

  getTasks(completedTasksToBottom = false) {
    const sortedTasks = [...this.tasks].sort(
      (a, b) => a._timestamp - b._timestamp
    );

    if (completedTasksToBottom) {
      return []
        .concat(sortedTasks.filter(task => !task.isDone))
        .concat(sortedTasks.filter(task => task.isDone));
    }
    return sortedTasks;
  }

  removeTask(index) {
    const removedTask = this.tasks.splice(index, 1);
    return removedTask;
  }

  removeCompletedTasks() {
    for (let i = 0, l = this.tasks.length; i < l; i++) {
      if (this.tasks[i].isDone === true) {
        this.tasks.splice(i--, 1);
        l--;
      }
    }
  }
}
