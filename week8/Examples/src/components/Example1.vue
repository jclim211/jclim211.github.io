<script>
    export default { 
        data() {
            return {
                msg : "Hello World"
            }
        }
    }
</script>

<template>
  <h1 class=greeting>{{ msg }}</h1>
</template>

<style scoped>
.greeting {
    color: red;
}
</style>
