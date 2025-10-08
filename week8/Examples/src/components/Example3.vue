<script>
    export default { 
        data() {
            return {
                seen: true
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
    <p v-if="toDisplay()">Today is Friday</p>
    <!-- https://www.w3schools.com/charsets/tryit.asp?deci=128546 -->
    <p v-if="seen">Today is a good day &#128512;</p>
    <p v-else>Not a good day &#128546;</p>
</template>
