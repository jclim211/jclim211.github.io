<script>
// Do NOT Edit
import data from './data.js';

// Do NOT Edit
export default {
   data() {
      // Do NOT Edit
      return {
         // Do NOT Edit
         groups: data,
         srank_only: false
      }
   },
}

// Do NOT Edit
</script>

<template>
   <h3>Registry of Adventurers</h3>
   <a id="top"></a>
   <label>
      <input type="checkbox">
      S rank only
   </label>

   <hr>

   <!-- Sample DOM for an adventurer group -->
   <div class="group">
      <h3>Silver Blade Guild 
         <div class="badge-group">
            <span class="badge">S rank</span>
            <span class="badge">Bravery</span>
         </div>
      </h3>
      <table>
         <thead>
            <tr>
               <th>Name</th>
               <th>Role</th>
               <th>Level</th>
               <th>Special Skills</th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>Arion Stormblade</td>
               <td>Warrior</td>
               <td>42</td>
               <td>Dragon Slayer</td>
            </tr>
            <tr>
               <td>Lyra Moonwhisper</td>
               <td>Mage</td>
               <td>38</td>
               <td>Arcane Burst</td>
            </tr>
            <tr>
               <td>Talia Frostwind</td>
               <td>Sorceress</td>
               <td>41</td>
               <td>Ice Nova</td>
            </tr>
         </tbody>
      </table>
   </div>

   
   <hr>
   <ul class="disclaimer">
      <li> Content is the intellectual property of the site operator.</li>
      <li>Information provided is for educational purposes only and not
         professional advice.</li>
      <li> Users act on the information at their own risk.</li>
      <li> The policy is subject to change.</li>
   </ul>
   <a href="#top" class="toplink">&#x2191;</a>

</template>

<style scoped>
/* Do NOT edit: start */
h3 {
   color: #007E6E;
   font-size: 1.8rem;
   font-family: 'Lucida Sans', 'sans-serif';
   padding: 5px;
}

.disclaimer {
   font-size: 0.8rem;
}

.group {
   border: 1px solid #007E6E;
   margin-top: 10px;
   padding: 5px;
}

.badge-group {
   display: flex;
   text-align: start;
}

.badge {
   background-color: #E7DEAF;
   color: #007E6E;

   font-size: 0.5rem;

   margin: 0px 5px;
   padding: 5px;
   border-radius: 10px;
   border: 1px solid #007E6E;

}

.toplink {
   background-color: #E7DEAF;
   padding: 5px;
   text-align: center;
   font-size: 1.5rem;
   font-weight: bold;
   text-decoration: none;

   border-radius: 50%;
}

/* Do NOT edit: end */

/* Your code goes here */

</style>