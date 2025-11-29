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
      let str = ``
      return null
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
        <td>
          image goes here
        </td>
      </tr>

      <!-- PART A: YOU NEED TO MODIFY THE BELOW -->
      <tr>
        <td>
          radio button goes here
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
        <td>
          activity and price go here
        </td>
      </tr>
    </tbody>
  </table>

  <hr>

  <!-- Bill Table Must Show Here -->
  <!-- YOU NEED TO MODIFY THE BELOW -->
  <div>
    <h1 >Your Bill</h1>

    Bill table shows here (HTML)

  </div>

</template>