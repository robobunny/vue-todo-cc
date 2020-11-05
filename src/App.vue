<template>
  <div id="app">
    <the-header></the-header>
    <div
      id="app-container"
      v-loading="loading"
      element-loading-text="Checking for saved tasks..."
      element-loading-background="rgba(0, 0, 0, 0.7)"
    >
      <task-list-add-item-form @add-task="addTask"></task-list-add-item-form>
      <div id="no-tasks-message" v-if="myTasks.tasks.length === 0">
        <p>No Todos</p>
        <p>Add some using the form above to get started!</p>
      </div>
      <tasks-list
        v-if="myTasks.tasks.length > 0"
        :tasks="myTasks.getTasks()"
        @remove-task="removeTask"
        @save-tasks="saveMyTasks"
      ></tasks-list>
    </div>
  </div>
</template>

<script>
import TasksList from "./components/TasksList";
import TaskListAddItemForm from "./components/TasksListAddItemForm";
import TheHeader from "./components/TheHeader";
import Task from "./models/Task";
import TaskList from "./models/TaskList";
import loadTasks from "./functions/loadTasks";
import saveTasks from "./functions/saveTasks";

let myTasks = new TaskList();
export default {
  components: {
    TasksList,
    TaskListAddItemForm,
    TheHeader
  },
  data() {
    return {
      loading: true,
      myTasks
    };
  },
  methods: {
    addTask(text) {
      this.myTasks.addTask(new Task(text));
      this.saveTasks(this.myTasks);
    },
    removeTask(index) {
      this.myTasks.removeTask(index);
      this.saveTasks(this.myTasks);
    },
    loadTasks,
    saveMyTasks() {
      this.saveTasks(this.myTasks);
    },
    saveTasks
  },
  mounted() {
    this.loadTasks(this.myTasks).then(() => {
      this.loading = false;
    });
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #aaa;
}

#app-container {
  background-color: #fff;
  height: 100vh;
  margin: 0 calc(max(5vw, calc(20vw - 75px)));
  padding: 5vh;
  box-shadow: 0 0 10px 5px lightskyblue;
  clip-path: inset(0px -15px 0px -15px);
}
</style>
