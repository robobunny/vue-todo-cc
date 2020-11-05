export default function saveTasks(taskObj) {
  console.log("Saving tasks to localStorage");
  const json = JSON.stringify(taskObj);
  localStorage.setItem("myVueTodoTasks", json);
}
