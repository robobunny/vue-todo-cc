<template>
  <el-form
    id="add-item-form"
    ref="addItemForm"
    :model="addItemForm"
    :inline="true"
    label-width="15ch"
    @submit.native.prevent="submitForm"
    border="2px"
  >
    <el-form-item id="form-item__input" label="New Task:">
      <el-input
        id="add=ietm-input"
        v-model="addItemForm.text"
        placeholder="Add a new task ..."
      ></el-input>
    </el-form-item>
    <el-form-item>
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

<style scoped></style>
