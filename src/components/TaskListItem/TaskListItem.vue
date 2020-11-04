<template>
  <div class="task-list-item">
    <task-list-item-checkbox></task-list-item-checkbox>
    <p class="task-list-item--text">{{ task.text }}</p>
    <task-list-item-delete-btn></task-list-item-delete-btn>
  </div>
</template>

<script>
import TaskListItemDeleteBtn from "./TaskListItemDeleteBtn";
import TaskListItemCheckbox from "./TaskListItemCheckbox";

export default {
  components: {
    TaskListItemCheckbox,
    TaskListItemDeleteBtn
  },
  data: function() {
    return {
      task: {
        text: "The text of the task"
      }
    };
  }
};
</script>

<style></style>
