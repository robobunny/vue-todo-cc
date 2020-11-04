<template>
  <div id="todo-list">
    <h1>Vue Todo</h1>
    <p>by William C. Duraney</p>
    <ul>
      <li>Task 1: {{ task1 }}</li>
      <li>Task 2: {{ task2 }}</li>
    </ul>
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

<style></style>
