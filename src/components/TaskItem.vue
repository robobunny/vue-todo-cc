<template>
  <div class="task-item">
    <el-button
      @click="toggleDone"
      :type="isDone ? 'success' : 'primary'"
      :plain="!isDone"
      icon="el-icon-check"
    ></el-button>
    <h2 class="task-item--text">{{ text }}</h2>
    <p class="task-item--created-at">Created: {{ createdAt }}</p>
    <el-button
      type="info"
      icon="el-icon-delete-solid"
      @click="removeTask"
      circle
    ></el-button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    isDone: {
      type: Boolean,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    toggleDone() {
      this.$emit("toggle-done", this.index);
    },
    removeTask() {
      console.log("Removing task at index: ", this.index);
      this.$emit("remove-task", this.index);
    }
  }
};
</script>

<style></style>
