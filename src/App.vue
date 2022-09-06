<template>
    <Question v-for="{id, question, answers} in questions"
        v-bind:answers="answers"
        v-bind:id="id"
        v-bind:question="question"
        key="id"
    />
</template>


<script setup lang="ts">
import Question from './components/Question.vue'
import questions from './assets/questions.json'
</script>

<style scoped>
</style>
