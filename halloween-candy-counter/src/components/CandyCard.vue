<template>
  <div class="card">
    <img :src="img" />

    <h2>{{ name }}</h2>

    <slot></slot>

    <div class="flavor">
      <slot name="flavor"></slot>
    </div>

    <div class="bonus">
      <slot name="bonus"></slot>
    </div>

    <div class="buttons">
      <button @click="$emit('add-candy')">Collect 🍬</button>
      <button @click="$emit('remove-candy')">Give Back 🙃</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name"],
  emits: ["add-candy", "remove-candy"],
};
</script>

<style scoped>
.card {
  width: 240px;
  padding: 12px;
  border-radius: 14px;
  background: #311331; /* deep purple */
  color: #f7eaff;
  border: 2px solid #ff8cff; /* neon pink edge */
  box-shadow: 0 0 12px #ff8cff4d;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #00000033;
}

.card h2 {
  margin: 4px 0 0;
  font-size: 1.1rem;
  line-height: 1.2;
}

.flavor,
.bonus {
  padding: 8px 10px;
  border-radius: 10px;
  background: #401940; /* slightly lighter panel */
  border: 1px solid #00000033;
  font-size: 0.95rem;
}

.bonus {
  background: #3a1424; /* hint of orange/red */
  border-color: #ff880066;
}

.buttons {
  display: flex;
  gap: 8px;
  margin-top: 2px;
}

button {
  flex: 1 1 auto;
  padding: 8px 10px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  background: #ff8cff;
  color: #2a0d2a;
  transition: transform 120ms ease, background 120ms ease;
}

button:hover {
  transform: translateY(-1px);
}
button:active {
  transform: translateY(0);
}
</style>
