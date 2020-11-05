<template>
  <el-form
    id="add-item-form"
    ref="addItemForm"
    :model="addItemForm"
    :inline="true"
    label-width="15ch"
    @submit.native.prevent="submitForm"
    border="2px"
    style="display: flex; flex-direction: row;"
  >
    <el-form-item id="form-item__input" label="New Task:">
      <el-input
        id="add=item-input"
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
      if (this.addItemForm.text.length === 0) {
        alert("Add some text so you know what to do!");
      } else {
        this.$emit("add-task", this.addItemForm.text);
        this.addItemForm.resetFields();
      }
    }
  }
};
</script>

<style scoped>
.form-item__input {
  flex-grow: 1;
}
</style>
