<template>
  <div id="todo-list">
    <img id="vue-logo" alt="Vue logo" src="../assets/logo.png" />
    <h1>Vue Todo</h1>
    <p>by William C. Duraney</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    task1: "It's ya ...",
    task2: "... Ya homie!"
  })
};
</script>

<style scoped>
#vue-logo {
  max-height: 15vmin;
  max-width: 15vmin;
}
</style>
