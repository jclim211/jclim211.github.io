<!-- 

Name: 
Email: 

 -->

<script>
export default {
    name: "FormatObject",
    props: ["data"],         
    computed: {
        isArray() {
            return Array.isArray(this.data);
        },
        isObject() {
            return this.data && typeof this.data === "object" && !Array.isArray(this.data);
        },
        isLiteral() {
            return !this.isArray && !this.isObject;
        }
    }
};
</script>

<template>
    <!-- Array -->
    <ul v-if="isArray">
        <li v-for="(val, idx) in data" :key="idx">
            [{{ idx}}]
            <FormatObject :data="val" />
        </li>
    </ul>

    <!-- Object -->
    <ul v-if="isObject">
        <li v-for="(val, key) in data" :key="key">
            {{ key }}:
            <FormatObject :data="val" />
        </li>
    </ul>

    <!-- Literal value -->
    <template v-if="isLiteral">{{ data }}</template>
</template>

<style scoped>
ul {
    list-style-type: disc;
}
</style>
