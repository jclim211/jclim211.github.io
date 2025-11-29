<script>
export default {

   // Props to receive data from parent
   props: ["recipe"],

   // Declare emitted events
   emits: ['favorite'],

}
</script>

<template>
   <div class="card h-100">
      <!-- TODO: Display recipe image -->
      <img src="/q3/placeholder.jpg" class="card-img-top" alt="recipe.title">

      <div class="card-body">
         <!-- TODO: Display recipe title -->
         <h5 class="card-title">recipe.title</h5>


         <!-- TODO: Display recipe description -->
         <p class="card-text">recipe.description</p>

         <!-- Recipe metadata -->
         <div class="mt-auto">
            <div class="d-flex justify-content-between align-items-center">
               <small class="text-muted">
                  <!-- TODO -->
                  ⏱️ recipe.cookTime
               </small>

               <!-- TODO -->
               <span class="badge badge-difficulty">
                  recipe.difficulty
               </span>
            </div>
         </div>

         <!-- Card footer: start -->
         <div class="card-footer bg-white d-flex justify-content-between align-items-center">
            <!-- TODO: Button that emits 'favorite' event with recipe id -->
            <button class="btn btn-sm btn-outline-danger">
               ❤️ Favorite
            </button>

            <!-- TODO: Add named slot called 'footer-extra' for custom content -->
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