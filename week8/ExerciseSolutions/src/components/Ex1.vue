<script>
    export default { 
        // Add Code Here
        data() {
            return {
                message : 'Choose your favorite fruit:',
                // we can also do this with an array. try it out!
                fruit1 : 'apple',
                fruit2 : 'orange',
                fruit3 : 'peach'
            }
        }
       
    }
</script>

<template>
    <div id="app">
        {{ message }} </br>
        {{ fruit1 }} <input type="radio" name="fruit">
        {{ fruit2 }} <input type="radio" name="fruit">
        {{ fruit3 }} <input type="radio" name="fruit">
    </div>
</template>

<style scoped>
</style>
