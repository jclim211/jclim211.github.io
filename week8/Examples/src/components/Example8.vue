<script>
    export default { 
        data() {
            return {
                counter : 0,
                name : "Vue"
            }
        },
        methods: {
            hello() {
                alert("Hello " + this.name + "!")
                // `event` is the native DOM event 
                // readily available to Vue
                alert(event.target.tagName + " event!") // -> button event!
            },
            say(message) { 
                    alert(message) 
                } 
        }
       
    }
</script>

<template>
    <!-- Listening to Events -->    
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <button v-on:click="hello">Say Hello</button>

    <button @click="say('hi')">Say hi</button> 
    <button @click="say('what')">Say what</button> 
   
</template>

<style scoped>
</style>
