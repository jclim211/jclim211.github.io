<script>
export default {
    data() {
        return {
            currentsrc: ''
        };
    },
    methods: {
        changePict() {
            if (this.currentsrc == this.src1) {
                this.currentsrc = this.src2;
            } else {
                this.currentsrc = this.src1;
            }
            setTimeout(this.changePict, this.interval * 1000); // every interval sec
        }
    },
    props: ['src1', 'src2', 'interval', 'width', 'height'],
    created() {
        this.currentsrc = this.src1;
        this.changePict();
    },
};
</script>

<template>
    <div>
        <img :src="currentsrc" :width="width" :height="height" />
    </div>
</template>

<style scoped></style>