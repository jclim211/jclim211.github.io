<script>
    export default { 
        data() {
            return {
                name: 'John',
                phone: '123456'
            }
        },
        methods: { 
   			getPhone() { 
                // method doesn't necessarily 'return'
				return "This is my number " + this.phone; 
            }
		}
    }
</script>

<template>
    <h1> Name : {{name}} </h1> 
    <h1> Phone : {{getPhone()}}  </h1>   
    <!-- {{ 'Mr ' + name }} <br>
    One plus two = {{ 1 + 2 }} <br>
    Uppercase: {{ name.toUpperCase() }} <br> -->
</template>

<style scoped>
.greeting {
    color: blue;
}
</style>
