<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <h1>Question</h1>

  <ul>
    <li>
      <RouterLink class="nav-link" to="/q1">Barista </RouterLink>
    </li>
    <li class="nav-item">
      <RouterLink class="nav-link" to="/q2">Adventurers </RouterLink>
    </li>
    <li>
      <RouterLink class="nav-link" to="/q3">Recipes Dashboard </RouterLink>
    </li>
    <li>
      <RouterLink class="nav-link" to="/q4">Contact Bridge </RouterLink>
    </li>
  </ul>

  <hr>

  <h1> Solution</h1>
  <ul>
    <li>
      <RouterLink class="nav-link" to="/solution/q1">Barista </RouterLink>
    </li>
    <li>
      <RouterLink class="nav-link" to="/solution/q2">Adventurers </RouterLink>
    </li>
    <li>
      <RouterLink class="nav-link" to="/solution/q3">Recipes Dashboard </RouterLink>
    </li>
    <li>
      <RouterLink class="nav-link" to="/solution/q4">Contact Bridge </RouterLink>
    </li>
  </ul>

</template>

<style scoped></style>