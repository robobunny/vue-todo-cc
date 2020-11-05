import Task from "../models/Task.js";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default async function loadTasks(taskObj) {
  await delay(3000);
  if (localStorage.getItem("myVueTodoTasks")) {
    try {
      const data = JSON.parse(localStorage.getItem("myVueTodoTasks"));
      if (data.tasks.length === 0) {
        throw "No tasks were saved!";
      } else {
        for (let task of data.tasks) {
          let newTask = new Task(task.text, task.timestamp, task.isDone);
          taskObj.addTask(newTask);
        }
      }
    } catch (error) {
      console.log(`Unable to load task list info:\n`, error);
    }
  } else {
    console.log("Unable to find any saved tasks.");
  }
}
