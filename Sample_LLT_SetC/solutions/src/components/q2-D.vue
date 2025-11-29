<!--
 Name:
 Email:
-->
<script>
export default {
    data() {
        return {
            path: '',
            num: '',
            msg: '',
            showValley: true
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
            this.showValley = true
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
            this.showValley = false
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

        // Part D
        process_count_valleys() {

            let level = this.get_level()
            
            if( level === 0 ){
                // Valid
                this.num = 
                    "Number of Valleys: " + this.count_valleys()
            }
            else {
                let msg = ""

                if( level < 0 ) {
                    // Invalid - valley
                    msg = "Invalid path! Hiker still in valley!"
                }
                else if( level > 0 ) {
                    // Invalid - mountain
                    msg = "Invalid path! Hiker still on mountain!"
                }

                this.msg = msg
            }
            
        },
        // Part D
        process_count_mountains() {
            let level = this.get_level()
            
            if( level === 0 ){
                // Valid
                this.num = 
                    "Number of Mountains: " + this.count_mountains()
            }
            else {
                let msg = ""

                if( level < 0 ) {
                    // Invalid - valley
                    msg = "Invalid path! Hiker still in valley!"
                }
                else if( level > 0 ) {
                    // Invalid - mountain
                    msg = "Invalid path! Hiker still on mountain!"
                }

                this.msg = msg
            }
            
        },


        // Part E
        print_path() {

            let path = this.path
            console.log(path)

            let len = path.length
            let level = 0
            let column = 0

            let path_array = []
            let max_depth = 0
            let max_height = 0


            // Prepare initial array
            for(let i = 0; i < len; i++) {
                // console.log( path[i] )

                if( path[i] == 'U' ) {
                    level++
                }
                else if( path[i] == 'D' ) {
                    level--
                }

                path_array.push(  [ path[i], level, column ]  )
                column++

                if( level < max_depth ) {
                    max_depth = level
                }
                if( level > max_height ) {
                    max_height = level
                }
            }


            // console.log("Max Height: " + max_height)
            // console.log("Max Depth: " + max_depth)



            // Adjust row index & make a new object
            let row_normalize = Math.abs(max_height) + Math.abs(max_depth)
            let new_path_array = []
            let max_row = 0

            for(let item of path_array) {

                let row_index = Math.abs( item[1] - Math.abs(max_height))
                let column_index = item[2]

                let key = row_index + ":" + column_index  // row:col
                let value = item[0]

                if( row_index > max_row ) {
                    max_row = row_index
                }

                new_path_array[key] = value
            }

            // console.log( new_path_array )


            
            // Prepare print array
            let print_array = []
            for(let row = 0; row <= max_row; row++) {
                let temp = []

                for(let col = 0; col <= len; col++) {
                    let key = row + ":" + col

                    if( key in new_path_array ) {
                        temp.push( new_path_array[key] )
                    }
                    else {
                        temp.push(" ")
                    }
                }

                print_array.push( temp )
            }

            // console.log( print_array )



            // Prepare final string
            let final_str = ''
            for(let row of print_array ) {
                for(let item of row ) {
                    //console.log( item )
                    final_str += item
                }
                final_str += "\n"
            }

            console.log(final_str)

            // DOM
            document.getElementById("hiking_path").innerText = final_str
          

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
    <h2 id="msg"> {{ msg }}</h2>

    Path:
    <br>
    <textarea id='path' cols='50' rows='5' v-model="path"></textarea>
    <br>


    <button @click="process_count_valleys">
        Count Valleys
    </button>

    <button @click="process_count_mountains">
        Count Mountains
    </button>



    <!-- 
        Part D
        Counts will be displayed here
    -->
    <h1 id="num_valleys" v-if="showValley">
        {{ num }}
    </h1>

    <h1 id="num_mountains" v-else>
        {{ num }}
    </h1>


    <!-- 
        Part E
        The hiking path will be shown here
    -->
    <hr>

    <h2>Part E</h2>

    <button @click="print_path">
        Show Hiking Path
    </button>
    
    <pre id="hiking_path"> 
       
    </pre>

</template>