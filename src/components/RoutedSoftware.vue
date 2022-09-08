<template>
    <main>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <h2>Questions</h2>
        <p>Answer the {{ questions.length }} questions below to assess your software's FAIRness.</p>
        <Question v-for="question, index in questions"
            v-bind:index="index"
            v-bind:key="question.id"
            v-bind:question="question"
        />
        <Badge />
    </main>
</template>


<script setup lang="ts">
import Badge from './Badge.vue'
import Question from './Question.vue'
import questions from '../assets/questions.json'
</script>

<style scoped>
</style>
