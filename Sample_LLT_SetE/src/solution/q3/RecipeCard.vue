<script>
export default {

   // Props to receive data from parent
   props: ["recipe"],

   // Declare emitted events
   emits: ['favorite'],

   methods: {
      onFavoriteClick() {
         // Emit the favorite event with recipe id
         this.$emit('favorite', this.recipe.id);
      }
   },
}
</script>

<template>
   <div class="card h-100 shadow-sm">
      <!-- Recipe image -->
      <img :src="recipe.image" class="card-img-top" :alt="recipe.title">

      <div class="card-body d-flex flex-column">
         <!-- Recipe title -->
         <h5 class="card-title">{{ recipe.title }}</h5>

         <!-- Recipe description -->
         <p class="card-text">{{ recipe.description }}</p>

         <!-- Recipe metadata -->
         <div class="mt-auto">
            <div class="d-flex justify-content-between align-items-center">
               <small class="text-muted">
                  <!-- TODO -->
                  ⏱️ {{ recipe.cookTime }}
               </small>

               <!-- TODO -->
               <span class="badge badge-difficulty" :class="{
                  'bg-success': recipe.difficulty === 'Easy',
                  'bg-warning': recipe.difficulty === 'Medium',
                  'bg-danger': recipe.difficulty === 'Hard'
               }">
                  {{ recipe.difficulty }}
               </span>
            </div>
         </div>

         <!-- Card footer: start -->
         <div
            class="card-footer bg-white d-flex justify-content-between align-items-center">
            <!-- TODO: Button that emits 'favorite' event with recipe id -->
            <button class="btn btn-sm btn-outline-danger"
               @click="onFavoriteClick">
               ❤️ Favorite
            </button>

            <!-- TODO: Add named slot called 'footer-extra' for custom content -->
            <slot name="footer-extra"></slot>
         </div>
         <!-- Card footer: End -->
      </div>
   </div>
</template>

<style scoped>
.card-img-top {
   height: 200px;
   object-fit: cover;
}

.badge-difficulty {
   font-size: 0.75rem;
}
</style>