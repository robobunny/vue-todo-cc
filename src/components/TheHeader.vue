<template>
  <div id="todo-list">
    <img id="vue-logo" alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ appTitle }}</h1>
    <p>by {{ appAuthor }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    appTitle: "Vue Todo App",
    appAuthor: "William C. Duraney"
  })
};
</script>

<style scoped>
#vue-logo {
  max-height: 15vmin;
  max-width: 15vmin;
}
</style>
