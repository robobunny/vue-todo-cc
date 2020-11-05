<template>
  <div id="the-header">
    <img id="vue-logo" alt="Vue logo" src="../assets/logo.png" />
    <div id="header__info">
      <h1>{{ appTitle }}</h1>
      <p>by {{ appAuthor }}</p>
    </div>
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
#the-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: lightskyblue;
  padding: 2rem 0;
}
#vue-logo {
  max-height: 15vmin;
  max-width: 15vmin;
  margin-left: calc(max(5vw, calc(20vw - 75px)));
  margin-right: 2rem;
}
</style>
