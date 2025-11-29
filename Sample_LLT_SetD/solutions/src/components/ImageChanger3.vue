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
    props: ['src1', 'src2', 'interval', 'width', 'height', 'caption_pos'],
    created() {
        this.currentsrc = this.src1;
        this.changePict();
    },
};
</script>

<template>
    <div>
        <span v-if="caption_pos == 'top'"><slot></slot></span>
        <div>
            <span v-if="caption_pos == 'left'"><slot></slot></span>
            <img :src="currentsrc" :width="width" :height="height" @click="$emit('imgclick')">
            <span v-if="caption_pos == 'right'"><slot></slot></span>
        </div>
        <span v-if="caption_pos == 'bottom'"><slot></slot></span>
    </div>
</template>

<style scoped></style>