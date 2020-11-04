<template>
  <div id="app" @addTask="addTask">
    <the-header></the-header>
    <task-list-add-item></task-list-add-item>
    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from "./components/TaskList";
import TaskListAddItem from "./components/TaskListAddItem";
import TheHeader from "./components/TheHeader";
import addTask from "./functions/addTask";

export default {
  components: {
    TaskList,
    TaskListAddItem,
    TheHeader
  },
  methods: {
    addTask: addTask
  }
};
</script>
