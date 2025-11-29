<script>
import ImageChanger2 from '../components/ImageChanger2.vue';

export default {
    components: {
        ImageChanger2
    },
};
</script>

<template>
    <div class="container my-5 text-start">
        <ImageChanger2 src1="/img/singapore.png" src2="/img/malaysia.png" interval=3 width=150 height=100 caption_pos="right"> Asia </ImageChanger2><br>
        <ImageChanger2 src1="/img/luxembourg.png" src2="/img/finland.png" interval=5 width=300 height=200 caption_pos="left"> Europe </ImageChanger2>
    </div>
</template>

<style scoped></style>