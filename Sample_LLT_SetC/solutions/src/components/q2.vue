<!--
 Name:
 Email:
-->
<script>
export default {
    data() {
        return {
            path: ''

        }
    },
    methods: {
        // Part A
        get_level() {

            let path = this.path
            console.log(path)

            let level = 0
            for(let cur of path) {
                console.log(cur)

                if(cur == 'D')
                    level--
                else if(cur == 'U')
                    level++
            }

            console.log(level)
            return level
            
        },

        // Part B
        count_valleys() {

            let path = this.path
            console.log(path)

            let level = 0
            let num_valleys = 0
            
            for(let cur of path) {

                if( cur == 'U' ) {
                    level++

                    if( level == 0 ) {
                        num_valleys++
                    }
                }
                else if( cur == 'D' ) {
                    level--
                }
                
            }

            console.log(num_valleys)
            return num_valleys

        },
        // Part C
        count_mountains() {
            
            let path = this.path
            console.log(path)

            let level = 0
            let num_mountains = 0
            
            for(let cur of path) {

                if( cur == 'U' ) {
                    level++
                }
                else if( cur == 'D' ) {
                    level--

                    if( level == 0 ) {
                        num_mountains++
                    }
                }
                
            }

            console.log(num_mountains)
            return num_mountains

        },
 
      
    }
}
</script>
<template>
     <div>

        Path:<br>
        <textarea id='path' v-model="path"></textarea>
        
        <br><br>

        <!-- Test get_level() -->
        <button @click="get_level">
            Test get_level
        </button>

        <!-- Test count_valleys() -->
        <button @click="count_valleys">
            Test count_valleys
        </button>

        <!-- Test count_mountains() -->
        <button @click="count_mountains">
            Test count_mountains
        </button>

    </div>


    <hr>

</template>