<template>
  <el-card :id="`task-item-${index}`" shadow="hover" class="task-item-card">
    <div class="task-item-content">
      <el-button
        @click="toggleDone"
        :type="isDone ? 'success' : ''"
        :plain="!isDone"
        icon="el-icon-check"
      ></el-button>
      <div class="task-info">
        <p :class="['task-info__text', { 'task-complete': isDone }]">
          {{ text }}
        </p>
        <p class="task-info__created-at">Created: {{ createdAt }}</p>
      </div>
      <el-button
        type="info"
        icon="el-icon-delete-solid"
        @click="removeTask"
        style="display: unset; max-height: "
        circle
      ></el-button>
    </div>
  </el-card>
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

<style lang="scss" scoped>
.task-item-card {
  margin: 2ch;
  background-color: #f0f0f0;
}
.task-item-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.task-info {
  flex-grow: 1;
  margin-left: 12px;
}

.task-info__text {
  size: 113%;
  font-weight: bold;
}

.task-complete {
  color: slategrey;
  font-style: italic;
  text-decoration: line-through;

  &::after {
    display: inline-block;
    content: "Complete!";
    font-style: normal;
    text-decoration: none;
    margin-left: 5px;
  }
}

.task-info__created-at {
  font-style: italic;
}
</style>
