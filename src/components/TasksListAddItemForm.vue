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
    <el-form-item class="form-item__input" label="New Task:">
      <el-input
        class="add-item-input"
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
        this.addItemForm.text = "";
      }
    }
  }
};
</script>

<style scoped>
#add-item-form {
  display: flex;
  flex-direction: row;
}
.form-item__input {
  flex-grow: 1;
  width: 100%;
}
.el-form-item__content {
  width: 100%;
}
.add-item-input {
  width: 100%;
}
</style>
