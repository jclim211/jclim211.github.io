<!--
 Name:
 Email:
-->
<script>
export default {
    // ADD CODE AS NECESSARY
    data() {
        return {
            path: ''
        }
    },
    methods: {
        // Part A
        get_level() {
            
            // YOUR CODE GOES HERE

        },
        // Part B
        count_valleys() {
            
            // YOUR CODE GOES HERE

        },
        // Part C
        count_mountains() {
            
            // YOUR CODE GOES HERE

        },
      
    }
}
</script>
<template>
    <div>
        <!-- DO NOT MODIFY THIS -->
        Path:<br>
        <textarea id='path' v-model="path"></textarea>
        
        <br><br>


        <!-- YOU NEED TO MODIFY THE BELOW -->
        <button>Test get_level</button>

        <!-- YOU NEED TO MODIFY THE BELOW -->
        <button>Test count_valleys</button>

        <!-- YOU NEED TO MODIFY THE BELOW -->
        <button>Test count_mountains</button>
    </div>

</template>