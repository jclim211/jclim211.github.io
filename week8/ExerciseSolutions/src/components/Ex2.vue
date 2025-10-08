<script>
    export default { 
        data() {
            return {
                width: '200',
                height: '200',
                myImg: '/assets/me.png'
            }
        },
    }
</script>

<template>
    <!-- add code here -->
    <!-- : is a short-hand notion of v-bind -->
    <img v-bind:src="myImg" :width="width" :height="height" />
   
</template>
