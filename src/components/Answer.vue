<template>
    <div>
        <input type="radio" v-bind:id="answer.id" v-bind:value="answer.id" >
        <label v-bind:for="answer.id">{{ answer.text }}</label>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    answer: {
        text: string,
        id: string
    }
}>()
</script>

<style scoped>
</style>
