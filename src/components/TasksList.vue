<template>
  <ul v-if="tasks.length > 0">
    <li
      is="task-item"
      v-for="(task, index) in tasks"
      :key="index"
      :index="index"
      :text="task.text"
      :isDone="task.isDone"
      :createdAt="task.createdAt"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
    ></li>
  </ul>
</template>

<script>
import TaskItem from "./TaskItem";
export default {
  components: {
    TaskItem
  },
  data: function() {
    return {
      someTasks: [
        {
          text: "The text as it is defined in TaskList.vue",
          isDone: false,
          createdAt: "Yesterday...",
          toggleDone() {
            this.isDone = !this.isDone;
          }
        }
      ]
    };
  },
  methods: {
    toggleDone(index) {
      const task = this.tasks[index];
      task.toggleDone();
      this.$emit("save-tasks");
    },
    removeTask(index) {
      console.log("TaskList.vue emitting 'remove-task' for index ", index);
      this.$emit("remove-task", index);
    }
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
