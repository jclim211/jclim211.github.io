<script>
    export default { 
        data() {
            return {
                message: 'This is inline styling',
                activeColor: 'blue', 
                size: '50px'
            }
        },
       
    }
</script>

<template>
    <!-- inline styling -->
    <p v-bind:style="{ 'color': activeColor, 'fontSize': size}"> {{ message }} </p>
   
</template>

<style scoped>
</style>
