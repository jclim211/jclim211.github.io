<script>
export default {
  name: 'App',
  data() {
    return {
      //simple values we will show on screen
      artist: 'Justin Bieber',
      tagline: "Belieber friendly demo",
      isSuperfan: false,
      belieberEnergy: 20,
    };
  }
};
</script>

<template>
  <main class="container">
    <h1 class="title">
      Simple Data Binding - Justin Bieber
    </h1>
    <p>Hello {{ artist }}</p>
    <p>{{ tagline }}</p>
  </main>
</template>

<style scoped>
.container{
  max-width: 640px;
  margin: 2rem auto;
  padding: 0 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
.title{
  font-size: 1.35rem;
  margin-bottom: 1rem;
}
</style>
