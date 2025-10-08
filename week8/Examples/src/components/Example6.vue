<script>
    export default { 
        data() {
            return {
                message: "Active Text Danger!",
                isActive: true,
                cssProp: 'text-danger',
                anotherCssProp: 'active'
            }
        },
       
    }
</script>

<template>
    <!-- internal styling -->
    <p v-bind:class="{active: isActive, 'text-danger': isActive}"> {{ message }} </p>
    <h3>Alternatively</h3>
    <p v-bind:class="[cssProp, anotherCssProp]"> {{ message }} </p>
</template>

<style scoped>
    .active {
        font-size: 40px;
    }
    .text-danger{
        color: crimson;
    }
</style>
