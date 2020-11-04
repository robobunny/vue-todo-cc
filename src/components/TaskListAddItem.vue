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
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Create</el-button>
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
    submitForm: () => {
      console.log("Submit!");
    }
  }
};
</script>

<style></style>
