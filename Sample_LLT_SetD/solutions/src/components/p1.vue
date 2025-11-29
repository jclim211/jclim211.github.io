<script>
// Import Axios (npm install axios)
import axios from 'axios';

export default {
    data() {
        return {
            pokemonName: "ditto",
            height: "",
            pictureUrl: "",
            abilities: [],
        };
    },
    methods: {
        getPokemon() {
            const url = "https://pokeapi.co/api/v2/pokemon/" + this.pokemonName;

            axios
                .get(url)
                .then(response => {
                    const obj = response.data;
                    this.height = "Height: " + obj.height;
                    this.pictureUrl = "Picture URL: " + obj.sprites.front_default;
                    this.abilities = "Number of abilities: " + obj.abilities.length;
                })
                .catch(error => {
                    console.log(error.message);
                });
        },
    },
    mounted() {
        this.getPokemon();
    },
};
</script>

<template>
    <div class="container my-5 text-start">
        <h1><span>{{ pokemonName }}</span></h1>
        <span>{{ pictureUrl }}</span><br>
        <span>{{ height }}</span><br>
        <span>{{ abilities }}</span>
    </div>
</template>

<style scoped></style>