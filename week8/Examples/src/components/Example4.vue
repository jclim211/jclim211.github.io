<script setup>
    /*
        To import an image to your Vue component
            Create assets directory within the public folder
            Place images in this assets folder

        Import images to your Vue component using one of the two methods below
    
    */
    import wad from '/assets/wad.png' // Method A -> public/assets/ folder
</script>

<script>
    export default { 
        data() {
            return {
                img : '/assets/me.png', // Method B -> public/assets/ folder
                message : '<p><b>Hi, I am John</b></p>',
                counter : 0,
                parentMessage: 'Parent',
                items: [
                    { message: 'Foo' },
                    { message: 'Bar' },
                ],
                msg: "",
            }
        },
        methods: { 
            toDisplay() {
                var d = new Date();
                if (d.getDay() == 5) {
                    return true;
                }
            }
	    }
    }
</script>

<template>
    <h1>The following demonstrates v-bind.</h1>
    <div id="demo1">
      <img v-bind:src="img"></img>
      <img v-bind:src="wad"></img>
    </div>

    <h1>The following demonstrates v-html.</h1>
    <!-- use v-html directive to let Vue know 
    that the content contains HTML code -->
    <div id="demo2" v-html="message"></div>

    <h1>The following demonstrates v-on.</h1>
    <div id="demo3">
        <button v-on:click="counter += 1">Add</button>
        <!-- the following is the shorthand of the above -->
        <!-- <button v-on:click="counter += 1">Add</button> -->
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <h1>The following demonstrates v-for.</h1>
    <ul id="demo4">
        <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
    </ul>

    <h1>The following demonstrates v-model.</h1>
    <div id="demo5">
        <input v-model="msg" placeholder="edit me">
        <p>Message is: {{ msg }}</p>
    </div>
   
</template>
