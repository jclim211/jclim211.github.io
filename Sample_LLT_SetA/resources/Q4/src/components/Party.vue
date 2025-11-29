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
         // YOUR CODE GOES HERE
      },

      // Send part invitation
      send_party_invitation() {
         // YOUR CODE GOES HERE
      }
   }, // methods
}
</script>

<template>
   <!-- Q4 Main -->
   <div class="container-fluid">

      <!-- Header -->
      <div class="container-fluid py-2 text-center">
         <h1>greeting goes here</h1>
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

               <textarea class="form-control" style="height: 140px"></textarea>

               <hr>

               <button type="button" class="btn btn-primary">
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

                  <tr>
                     <td>
                        <input class="form-check-input" type="checkbox">
                     </td>
                     <td> some email goes here </td>
                     <td> some category goes here </td>
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
                     value="some emails go here...">
               </div>

               <div class="mb-3">
                  <label class="form-label">Message</label>
                  <textarea class="form-control"
                     rows="3">some message goes here</textarea>
               </div>

               <button type="button" class="btn btn-danger">
                  Send Invitation
               </button>

            </form><!-- end-form -->

         </div>

      </div><!-- [Bottom] end-row -->




   </div><!-- [Q4 Main] end-container-->



</template>

<style scoped></style>