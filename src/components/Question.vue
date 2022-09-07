<template>
    <div>
        <h2>{{ question.id }}</h2>
        <fieldset>
            <legend>{{ question.text }}</legend>

            <Answer v-for="answer in question.answers"
                v-bind:answer="answer"
                v-bind:key="answer.id"
            />

        </fieldset>
    </div>
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
fieldset {
    margin-bottom: 5em;
}

</style>
