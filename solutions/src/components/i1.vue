<script>
import ImageChanger from '../components/ImageChanger.vue';

export default {
    components: {
        ImageChanger
    },
};
</script>

<template>
    <div class="container my-5 text-start">
        <ImageChanger src1="/img/singapore.png" src2="/img/malaysia.png" interval=3 width=300 height=200></ImageChanger><br>
        <ImageChanger src1="/img/luxembourg.png" src2="/img/finland.png" interval=5 width=150 height=100></ImageChanger>
    </div>
</template>

<style scoped></style>