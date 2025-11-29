<script>
export default {

   data() {
      // Do NOT edit
      return {
         // Do NOT edit
         shopName: "Café Latte Vue",
         newDrink: "",
         orders: []
      }
   },

   methods: {
      addOrder() {
         // TODO: push a new drink object:
         // { name: "Value of the input text field", completed: false }
      }
   },
}
</script>

<template>
   <!-- Add your code here -->
   <h1>Page title</h1>

   <input id="drinkInput" type="text" placeholder="Enter drink">

   <button>Add Order</button>

   <div>
      No orders yet
   </div>

   <ul class="order-list">
      <li class="order-item">
         Order's name
         <button>Complete</button>
      </li>
      <li class="order-item completed">
         Completed Order's name
         <button>Complete</button>
      </li>
   </ul>

</template>

<style scoped>
/* Do NOT edit this*/
.completed {
   /* Do NOT edit this*/
   text-decoration: line-through;
   opacity: 0.6;
}

/* Add your code  here */

</style>