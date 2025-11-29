<!--
    
Name:   
Email:  

-->

<script>
export default {

  data() {
    return {
      // DO NOT MODIFY/EDIT THIS DATA PROPERTY
      available_celebs: {
        "G-Dragon": "bb_gd.jpg",
        "Taeyang": "bb_taeyang.jpg",
        "TOP": "bb_top.jpg"
      },

      // DO NOT MODIFY/EDIT THIS DATA PROPERTY
      available_activities: [
        {
          "name": "Chat",
          "price": "10.50"
        },
        {
          "name": "Hug",
          "price": "30.25"
        },
        {
          "name": "Kiss",
          "price": "60.99"
        }
      ],

      // DO NOT MODIFY THIS MANUALLY IN THIS FILE
      selected_celeb: null,

      // DO NOT MODIFY THIS MANUALLY IN THIS FILE
      selected_activities: []
    };
  },

  methods: {
    // Methods here
  },

  computed: {
    // PART B: YOU NEED TO MODIFY THE BELOW
    total_bill() {
      let total = 0;
      for (let activity of this.selected_activities) {
        total += Number(activity.price);
      }
      return total.toFixed(2);
    }

  },

  mounted() {
    console.log('Component mounted!');
  }

};
</script>

<template>

  <table border='1'>

    <tbody>
      <!-- DO NOT MODIFY THIS -->
      <tr>
        <td colspan='3' align='center'>
          <h3>Step 1: Select Celebrity</h3>
        </td>
      </tr>

      <!-- PART A: YOU NEED TO MODIFY THE BELOW -->
      <tr>
        <td v-for="(img, celeb) in available_celebs">
          <img :src="img" :alt="celeb">
        </td>
      </tr>

      <!-- PART A: YOU NEED TO MODIFY THE BELOW -->
      <tr>
        <td v-for="(img, celeb) in available_celebs">
          <label>
            <input type="radio" name="celeb" v-model="selected_celeb"
              :value="celeb">
            {{ celeb }}
          </label>
        </td>
      </tr>

      <!-- DO NOT MODIFY THIS -->
      <tr>
        <td colspan='3' align='center'>
          <h3>Step 2: Choose Activities</h3>
        </td>
      </tr>

      <!-- PART A: YOU NEED TO MODIFY THE BELOW -->
      <tr>
        <td v-for="activity of available_activities">
          <label>
            <input type="checkbox" name="activities"
              v-model="selected_activities" :value="activity">
            {{ activity.name }} (${{ activity.price }})
          </label>
        </td>
      </tr>
    </tbody>
  </table>

  <hr>

  <!-- Bill Table Must Show Here -->
  <!-- YOU NEED TO MODIFY THE BELOW -->
  <div>
    <h1>Your Bill</h1>

    <table v-if="selected_celeb">
      <thead>
        <tr>
          <th colspan="2">
            Your Fan Request
          </th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td>
            <img :src="available_celebs[selected_celeb]" :alt="selected_celeb">
          </td>
          <td>
            {{ selected_celeb }}
          </td>
        </tr>

        <tr v-for="activity of selected_activities">
          <td>
            {{ activity.name }}
          </td>
          <td>
            ${{ activity.price }}
          </td>
        </tr>

        <tr>
          <td>Total</td>
          <td>
            ${{ total_bill }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>