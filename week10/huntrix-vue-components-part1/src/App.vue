<script>
import HeaderBar from "./components/HeaderBar.vue";
import FooterBar from "./components/FooterBar.vue";
import MemberCard from "./components/MemberCard.vue";

export default {
  name: "App",
  components: { HeaderBar, FooterBar, MemberCard },
  data() {
    return {
      group: "HUNTRIX",
      members: [
        {
          id: 1,
          name: "Rumi",
          role: "Leader, Vocal",
          img: "/photos/rumi.jpg",
          city: "Dubai",
        },
        {
          id: 2,
          name: "Mira",
          role: "Rapper",
          img: "/photos/mira.jpg",
          city: "Los Angeles",
        },
        {
          id: 3,
          name: "Zoey",
          role: "Dancer",
          img: "/photos/zoey.jpg",
          city: "Moscow",
        },
      ],
    };
  },
};
</script>

<template>
  <div id="app">
    <!-- Header Bar goes here -->
    <HeaderBar />

    <div class="main">
      <!-- Member Cards go here -->
      <MemberCard
        v-for="m in members"
        :key="m.id"
        :name="m.name"
        :role="m.role"
        :img="m.img"
        :city="m.city"
      >
        <!-- This appears inside MemberCard’s slot -->
        <p style="font-size: 0.9rem; color: #555">
          ✨ {{ m.name }} is shining bright today!
        </p>

        <!-- Named footer slot -->
        <template #footer>
          <!-- You can put any HTML/components here -->
          <div>
            <span title="Top Performer">🏆</span>
            <span title="Stage Ready">🎶</span>
            <small style="display: block; color: #555; margin-top: 4px">
              Fan badges updated today
            </small>
          </div>
        </template>
      </MemberCard>
    </div>
    <!-- Footer -->
    <FooterBar />
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
