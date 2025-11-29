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
      <input type="checkbox" v-model="srank_only">
      S rank only
   </label>

   <hr>

   <template v-for="group of groups">
      <div class="group"
         v-if="!srank_only || (group.badges && group.badges.indexOf('S rank') >= 0)">
         <h3>
            {{ group.group }}
            <div class="badge-group">
               <span v-for="badge of group.badges" class="badge">
                  {{ badge }}
               </span>
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
               <tr v-for="member of group.members">
                  <td>{{ member.name }}</td>
                  <td>{{ member.role }}</td>
                  <td>{{ member.level }}</td>
                  <td>{{ member.special_skill }}</td>
               </tr>
            </tbody>
         </table>
      </div>
   </template>

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
   font-size:0.8rem;
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
/* .badge-group is at the top right corner of the <h3> */
.group h3 {
   position: relative;
}

.badge-group {
   position: absolute;
   /* nearest non-static parent */

   top: 5px;
   right: 5px;
}


.toplink {
   /* height and width 50% */
   display: inline-block;
   height: 50px;
   width: 50px;

   /* relative to browser window, 5px from the bottom border, 5px from the right border  */
   position: fixed;
   bottom: 0px;
   right: 0px;
}
</style>