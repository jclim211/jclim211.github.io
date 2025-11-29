<script>
import recipesData from './data.js';
import RecipeCard from "./RecipeCard.vue";

export default {
    components: {
        RecipeCard: RecipeCard
    },

    data() {
        return {
            recipes: recipesData,
            favoritedRecipes: []
        };
    },

    methods: {
        // TODO: Handle the favorite event emitted from child component
        handleFavorite(recipeId) {
            // Find the recipe by id
            const recipe = this.recipes.find(r => r.id === recipeId);

            if (recipe && !this.favoritedRecipes.includes(recipe.title)) {
                // Add recipe title to favorites array
                this.favoritedRecipes.push(recipe.title);
            }
        }
    }
}
</script>

<template>
    <h1 class="text-center mb-4">Recipe Dashboard</h1>

    <div class="container-fluid">
        <div class="row">
            <!-- TODO: Add Bootstrap column classes for responsive layout and ordering -->
            <!-- Sidebar: 
            col-12 col-lg-3: <992px (100%), >=992px (25%) to leave 75% for 3 cards'
            order-2 order-lg-1: appears second < 992px, first on >= 992px -->
            <div class="col-12 col-lg-3 order-2 order-lg-1 mb-4">

                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">🔍 Filter Recipes</h5>
                        <hr>
                        <p class="text-muted mb-1"><strong>Difficulty:</strong>
                            All
                        </p>
                        <p class="text-muted mb-0"><small>More filters coming
                                soon...</small></p>
                    </div>
                </div>
            </div> <!-- col -->

            <!-- TODO: Add Bootstrap column classes for recipe cards container -->
            <!-- col-12 col-lg-9: <992px (100%), >=992 (75%) 
            order-1 order-lg-2: appears first for < 992px, second >= 992px -->
            <div class="col-12 col-lg-9 order-1 order-lg-2">

                <div class="row">

                    <!-- 
                        TODO: Add Bootstrap column classes for responsive layout and ordering 
                        TODO: Loop through recipes and create a card for each 
                    -->
                    <!-- 
                     col-12 col-md-6 col-lg-4: <768px (100%), >=768px (50%), >=992px (1/3 of 75% = 25%)
                    -->
                    <div class="col-12 col-md-6 col-lg-4 mb-4"
                        v-for="recipe in recipes" :key="recipe.id">

                        <!-- Do NOT Edit: Start-->
                        <RecipeCard :recipe="recipe" @favorite="handleFavorite">
                            <!-- Using named slot for custom footer content on first recipe -->
                            <template v-slot:footer-extra
                                v-if="recipe.id === 1">
                                <span class="badge bg-warning text-dark">
                                    ⭐ Chef's Special</span>
                            </template>
                        </RecipeCard>
                        <!-- Do NOT Edit: End-->

                    </div> <!-- col -->
                </div> <!-- row -->

            </div> <!-- col -->
        </div> <!-- row -->
    </div> <!-- container -->

    <!-- Display favorited recipes -->
    <!-- Do NOT Edit: Start -->
    <div class="mt-4 p-3 bg-light rounded">
        <h5>❤️ Favorited Recipes:</h5>
        <p class="mb-0" v-if="favoritedRecipes.length > 0">
            {{ favoritedRecipes.join(', ') }}
        </p>
        <p class="mb-0 text-muted" v-else>
            <em>None yet! Click the favorite button on any recipe.</em>
        </p>
    </div>
    <!-- Do NOT Edit: End -->
</template>

<style scoped></style>