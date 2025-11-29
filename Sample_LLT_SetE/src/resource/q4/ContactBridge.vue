<script>
import runTests from "./tests.js";

export default {
   // Do NOT edit: Start
   data() {
      return {
         results: []
      }
   },
   // Do NOT edit: End

   methods: {
      // Do NOT edit: Start
      doClick() {
         this.results = runTests(this.sort);
      },
      // Do NOT edit: End

      /**
       * Sort the given deck of cards from highest to lowest.
       * 
       * Suit rank order from highest to lowest is 
       *    Spades, Hearts, Diamonds, and Clubs. 
       * Cards of equal suit are ranked by their card values
       *    from highest to lowest:
       *    (A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2).
       * 
       * @param cards
       *    Array of strings representing a deck of cards to be sorted in place.
       *       E.g. ["C10", "SA", "H2", "D5"]
       *       for 10 of Club, Ace of Spade, 2 of Hearts, 5 of Diamond
       *    The first character is the suit 
       *       "S", "H", "D", "C" for Spades, Hearts, Diamonds, and Clubs.
       *    The rest is the card's value - A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2.
       */
      sort(cards) {
         console.log('sort method called');

         // TODO: Your code goes here
      },

      // You may add more supporting methods

   }, // methods
}
</script>

<template>
   <h1>Sort cards according to Contact Bridge rules</h1>
   <button @click="doClick">Run Tests</button>
   <hr>
   <pre v-for="result of results">{{ result }}</pre>
</template>

<style scoped></style>