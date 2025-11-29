<!--
    
Name:   
Email:  

-->

<script>
export default {

   data() { // DO NOT EDIT
      return {

         // DO NOT EDIT
         greeting: "Hola Amigos!",

         // DO NOT EDIT
         directory: [
            {
               email: "frank@smu.edu.sg",
               category: "EDUCATION"
            },
            {
               email: "kyong@smu.edu.sg",
               category: "EDUCATION"
            },
            {
               email: "jennie@bpink.info",
               category: "OTHERS"
            },
            {
               email: "layfoo@kpop.org",
               category: "OTHERS"
            }
         ],

         // DO NOT EDIT
         new_emails: "alice@smu.edu.sg, bob@gmail.com",

         // DO NOT EDIT
         party_email_subject: "Year-End KBBQ Party",

         // DO NOT EDIT
         party_email_message: "Dear friends! The year is ending, and it's party time! Please accept this invitation by 10 December 2021 yah? No need to bring anything except your wonderful hungry and thirsty self! Hope to see you and best wishes to you!",

         // DO NOT EDIT
         party_email_addresses: [
            "kyong@smu.edu.sg",
            "jennie@bpink.info"
         ]

      }
   }, // data - DO NOT EDIT

   methods: {

      add_to_directory() {
         console.log("=== [START] add_to_directory ===")

         // 1. Split email string - store in array
         let email_array = this.new_emails.split(/(?:,| )+/)
         console.log(email_array)

         // 2. Update this.directory
         for (let email_item of email_array) {
            console.log(email_item)

            if (email_item.includes("@")) {
               // Determine Category
               let email_parts = email_item.split("@")
               let email_category = "OTHERS"
               if (email_parts[1].toUpperCase().includes("EDU")) {
                  email_category = "EDUCATION"
               }

               // Insert into this.directory
               this.directory.push(
                  {
                     email: email_item,
                     category: email_category
                  }
               )
            }
         }

         // 3. Clear textarea
         this.new_emails = ""

         console.log("=== [END] add_to_directory ===")
      },

      // Send part invitation
      send_party_invitation() {

         let str = "Invitation sent to " + this.party_email_addresses.join(", ")

         str += `\n\nSubject: ${this.party_email_subject}`

         str += `\n\nMessage: ${this.party_email_message}`

         // alert( "Sent!" )

         console.log(str)
         alert(str)

      }
   }, // methods
}
</script>

<template>
   <!-- Q4 Main -->
   <div class="container-fluid">

      <!-- Header -->
      <div class="container-fluid py-2 text-center">
         <h1>{{ greeting }}</h1>
      </div>



      <!-- Body -->
      <div class="row">

         <!-- Left Panel (add email addresses) -->
         <div class="col-sm-4 p-3"
            style="background-color: rgb(253, 255, 155);">

            <div class="form-floating">

               <span class="fw-bold">
                  Enter email addresses
               </span>
               <br>
               <span>
                  (separated by comma)
               </span>

               <textarea class="form-control" style="height: 140px"
                  v-model="new_emails"></textarea>

               <hr>

               <button type="button" class="btn btn-primary"
                  v-on:click="add_to_directory()">
                  Add to Directory
               </button>

            </div>

         </div>


         <!-- Right Panel (Email Directory) -->
         <div class="col-sm p-3" style="background-color: rgb(210, 247, 250);">

            <table class="table table-bordered border-dark">

               <thead>
                  <tr>
                     <th>Select</th>
                     <th>Email Address</th>
                     <th>Category</th>
                  </tr>
               </thead>

               <tbody>

                  <tr v-for="item in directory" >
                     <td>
                        <input class="form-check-input" type="checkbox"
                           v-bind:value="item.email"
                           v-model="party_email_addresses">
                     </td>
                     <td> {{ item.email }} </td>
                     <td> {{ item.category }} </td>
                  </tr>

               </tbody>

            </table>

         </div>

      </div><!-- [Body] end-row -->



      <!-- Bottom -->
      <div class="row mt-3">

         <h2 class="text-center">Party Invitation</h2>

         <div class="col-sm-12">

            <!-- form -->
            <form>

               <div class="mb-3">
                  <label class="form-label">Subject</label>
                  <input type="text" class="form-control"
                     v-model="party_email_subject">
               </div>

               <div class="mb-3">
                  <label class="form-label">Message</label>
                  <textarea class="form-control" rows="3"
                     v-model="party_email_message"></textarea>
               </div>

               <button type="button" class="btn btn-danger"
                  v-on:click="send_party_invitation">
                  Send Invitation
               </button>

            </form><!-- end-form -->

         </div>

      </div><!-- [Bottom] end-row -->




   </div><!-- [Q4 Main] end-container-->



</template>

<style scoped></style>