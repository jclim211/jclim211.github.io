<script>
    export default { 
        // add code here
        data() {
                return {
                    loginType: 'username'
                }
        }

    }
</script>

<template>
    <h1>Please select your login option</h1>
    <!-- Add/modify code in the following to have a dropdown list 
        which lets the user to select either to login with username or email -->
   
    <select v-model = "loginType">
        <option selected value="username">Username login</option>
        <option>Email login</option>
    </select>

    <div v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
    </div>

    <div v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
    </div>
   
</template>

