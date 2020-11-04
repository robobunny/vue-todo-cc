<template>
  <div id="task-list">
    <ul v-if="tasks.length > 0">
      <li v-for="task in tasks" :key="task.id">
        <task-list-item></task-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import TaskListItem from "./TaskListItem/TaskListItem";
export default {
  components: {
    TaskListItem
  },
  data: function() {
    return {
      tasks: [
        {
          id: 1,
          text: "The text as it is defined in TaskList.vue"
        }
      ]
    };
  }
};
</script>

<style></style>
