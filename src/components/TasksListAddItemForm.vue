<template>
  <el-form
    ref="addItemForm"
    :model="addItemForm"
    label-width="15ch"
    @submit.native.prevent="submitForm"
  >
    <el-form-item label="New Task:">
      <el-input
        v-model="addItemForm.text"
        placeholder="Add a new task ..."
      ></el-input>
      <el-button type="primary" native-type="submit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      addItemForm: {
        text: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit("add-task", this.addItemForm.text);
      this.addItemForm.text = "";
    }
  }
};
</script>

<style></style>
