<template>
    <fieldset>
        <legend>{{ question.text }}</legend>

        <Answer v-for="answer in question.answers"
            v-bind:answer="answer"
            v-bind:key="answer.id"
        />

    </fieldset>
</template>

<script setup lang="ts">
import Answer from './Answer.vue'
defineProps<{
    question: {
        answers: {
            text: string,
            id: string
        }[]
        id: string
        text: string
    }
}>()
</script>

<style scoped>
</style>
