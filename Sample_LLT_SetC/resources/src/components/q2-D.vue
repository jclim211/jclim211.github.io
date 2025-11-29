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
        // Part D
        // Feel free to add additional functions
        
        // Part E
        print_path() {
            
            let output = ``

            // YOUR CODE GOES HERE

            return output

        }
    }
}
</script>
<template>
        <h1>Counting Valleys & Mountains</h1>

        <!-- 
            Part D
            Message will be displayed here
        -->
        <h2 id="msg"></h2>



        Path:
        <br>
        <textarea id='path' cols='50' rows='5' v-model="path"></textarea>
        <br>

        <button>Count Valleys</button>
        <button>Count Mountains</button>


        <!-- 
            Part D
            Counts will be displayed here
        -->
        <h1 id="num_valleys">
        </h1>

        <h1 id="num_mountains">
        </h1>

        <!-- 
            Part E
            The hiking path will be shown here
        -->
        <hr>
        <h2>Part E</h2>
        <button>Show Hiking Path</button>
        <pre id="hiking_path">
        </pre>

  
</template>