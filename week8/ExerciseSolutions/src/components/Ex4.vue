<script>
    export default { 
        data() {
            return {
                // Add code here
                // part 1
                id: "demo1",
                blueBox: true,
                blueBtn: true,
                // part 2
                id: "demo2",
                activeColor: "red",
                redBtn: true
            }
        },
        methods: { 
   			// Add code here
            // part 1
            changeColor() {
                if (this.blueBox) {
                    this.blueBox = false;
                    this.blueBtn = false;
                } else {
                    this.blueBox = true;
                    this.blueBtn = true;
                    
                }
            },
             // part 2
            changeTextColor() {
                if (this.activeColor == "blue") {
                    this.activeColor = "red";
                    this.redBtn = true;
                } else { 
                    this.activeColor = "blue";
                    this.redBtn = false;
                }
            }
		}
    }
</script>

<template>
    
    <!-- Add code here -->
    <div id="part1">
        <div v-bind:id="id" class="m-2" v-bind:class="{'blueBox': blueBox, 'redBox': !blueBox}">
            div ID : {{id}} 
        </div>
        <!-- note: need to use single quotes '' for classes such as btn-primary which contains '-' signs
                    because '-' is a minus operator for (Vue) JavaScript  -->
        <button type="button" v-bind:class="{'btn' : true, 'btn-primary': blueBtn, 'btn-danger': !blueBtn}" @click="changeColor">Change Color</button>
    </div>

    <div id="part2">
        <div v-bind:id="id" class="m-2" v-bind:style="{'color':activeColor}">
            div ID : {{id}} 
        </div>
       
        <button type="button" v-bind:class="{'btn' : true, 'btn-primary': !redBtn, 'btn-danger': redBtn}" @click="changeTextColor">Change Text Color</button> 
    </div>

</template>

<style scoped>
    .redBox {
            background-color: red;
    }
    .blueBox {
        background-color: blue;
    }
    #demo1 {
        color: white;
    }
</style>
