<script>
export default {
  name: 'App',
  data() {
    return {
      group: 'HUNTRIX',
      members: [
        {
          id: 1,
          name: 'Rumi',
          role: 'Leader, Vocal',
          img: '/photos/rumi.jpg'
        },
        {
          id: 2,
          name: 'Mira',
          role: 'Rapper',
          img: '/photos/mira.jpg'
        },
        {
          id: 3,
          name: 'Zoey',
          role: 'Dancer',
          img: '/photos/zoey.jpg'
        }
      ]
    }
  }
}
</script>

<template>
  <div id="app">

    <!-- Header Bar goes here -->
    <h1>{{ group }}</h1>

    <div class="main">
      <!-- Member Cards go here -->
       <div v-for="m in members">
          <h2>{{ m.name }}</h2>
          <p>{{ m.role }}</p>
          <img :src="m.img" width="100">
       </div>
    </div>
    <!-- Footer -->

    
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}
</style>
