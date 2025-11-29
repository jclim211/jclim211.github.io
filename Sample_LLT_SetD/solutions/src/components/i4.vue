<script>
import ImageChanger3 from '../components/ImageChanger3.vue';

export default {
    data() {
        return {
            widthOfAllImages: 300,
            heightOfAllImages: 200,
        }
    },
    methods: {
        changeSize() {
            if (this.widthOfAllImages == 300) {
                this.widthOfAllImages = 150;
                this.heightOfAllImages = 100;
            } else {
                this.widthOfAllImages = 300;
                this.heightOfAllImages = 200;
            }
        }
    },
    components: {
        ImageChanger3
    },
};
</script>

<template>
    <div class="container my-5 text-start">
        <ImageChanger3 src1="/img/singapore.png" src2="/img/malaysia.png" interval=3 :width="widthOfAllImages" :height="heightOfAllImages" caption_pos="bottom" v-on:imgclick="changeSize"> Asian </ImageChanger3><br>
        <ImageChanger3 src1="/img/luxembourg.png" src2="/img/finland.png" interval=5 :width="widthOfAllImages" :height="heightOfAllImages" caption_pos="bottom" v-on:imgclick="changeSize"> Europe </ImageChanger3>
    </div>
</template>

<style scoped></style>