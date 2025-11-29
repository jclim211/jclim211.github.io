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
         if (this.newDrink.trim() === "") return;

         this.orders.push({
            name: this.newDrink,
            completed: false
         });

         this.newDrink = ""; // clear input
      }
   },
}
</script>

<template>
   <!-- Add your code here -->
   <h1>{{ shopName }}</h1>

   <input id="drinkInput" type="text" placeholder="Enter drink"
      v-model="newDrink">

   <button v-on:click="addOrder">Add Order</button>

   <div v-if="orders.length === 0">
      No orders yet
   </div>

   <ul class="order-list" v-else>
      <li v-for="order in orders" :class="{ completed: order.completed }"
         class="order-item">
         {{ order.name }}
         <button v-on:click="order.completed = true">Complete</button>
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
/* 1. Tag selector - all h1 elements */
h1 {
   color: #4b2e1e;
}

/* 2. Class selector - all drink order items */
.order-item {
   background: #f5f0e6;
   padding: 12px;
   border-radius: 6px;
}

/* 3. ID selector - drink input field */
#drinkInput {
   border: 2px solid #8b4513;
}

/* 4. Parent > child selector - only direct li children of .order-list */
.order-list>li {
   margin-bottom: 10px;
}

/* 5. Multiple elements selector - bold text for li + button */
button,
li {
   font-weight: bold;
}
</style>