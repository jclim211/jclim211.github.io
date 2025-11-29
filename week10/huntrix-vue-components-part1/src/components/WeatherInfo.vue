<template>
  <div class="weather">
    <p v-if="error" class="error">⚠️ Weather unavailable</p>
    <p v-else-if="temp !== null">{{ city }}: {{ Math.round(temp) }} °C ({{ getWeatherEmoji(Math.round(temp)) }})</p>
    <p v-else>Loading weather...</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WeatherInfo',
  props: ['city'],
  data() {
    return { temp: null, error: false }
  },
  async created() {
    try {
      const API_KEY = 'a73a0ca8436937ae611a9ff736d8b97f'    // replace with your key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`
      const resp = await axios.get(url)
      this.temp = resp.data.main.temp
    } catch {
      this.error = true
    }
  },
  methods: {
    getWeatherEmoji(temperature) {
        if (temperature >= 32) return "🔥"
        else if (temperature >= 20) return "☀️"
        else if (temperature >= 10) return "🍂"
        else return "🥶"
    }
  }
}
</script>

<style scoped>
.weather { font-size: 0.9rem; color: #333; }
.error { color: #c62828; }
</style>
