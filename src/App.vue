<template>
    <Question v-for="question in questions"
        v-bind:key="question.id"
        v-bind:question="question"
    />
</template>


<script setup lang="ts">
import Question from './components/Question.vue'
import questions from './assets/questions.json'
</script>

<style scoped>
</style>
