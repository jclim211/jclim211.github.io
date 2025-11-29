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
                    this.pictureUrl = obj.sprites.front_default;
                    this.abilities = obj.abilities;
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
        <img :src="pictureUrl"><br>
        <span>{{ height }}</span><br>
        Abilities:
        <ul>
            <li v-for="ability in abilities">{{ ability.ability.name }}</li>
        </ul>
    </div>
</template>

<style scoped></style>