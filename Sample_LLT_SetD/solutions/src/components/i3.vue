<script>
import ImageChanger3 from '../components/ImageChanger3.vue';

export default {
    methods: {
        onImgClick() {
            alert("Someone clicked me!");
        }
    },
    components: {
        ImageChanger3
    },
};
</script>

<template>
    <div class="container my-5 text-start">
        <ImageChanger3 src1="/img/singapore.png" src2="/img/malaysia.png" interval=3 width=300 height=200 caption_pos="right" v-on:imgclick="onImgClick"> Asian </ImageChanger3><br>
        <ImageChanger3 src1="/img/luxembourg.png" src2="/img/finland.png" interval=5 width=200 height=150 caption_pos="right" v-on:imgclick="onImgClick"> Europe </ImageChanger3>
    </div>
</template>

<style scoped></style>