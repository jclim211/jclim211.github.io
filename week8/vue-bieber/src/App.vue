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
      webUrl: "https://en.wikipedia.org/wiki/Justin_Bieber",
      webUrlText: "Justin Bieber - Wikipedia",
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
    <p>Shoutout: {{ artist + "!" }}</p>
    <p>Uppercase: {{ artist.toUpperCase() }}</p>

    <hr>

    <p>
      Web address (url):
      <input type="url" v-model="webUrl">
    </p>

    <p>
      Link text:
      <input type="text" v-model="webUrlText">
    </p>

    <p>
      <a v-bind:href="webUrl" target="_blank">{{webUrlText}}</a>
    </p>
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
