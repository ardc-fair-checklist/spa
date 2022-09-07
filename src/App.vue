<template>
    <div>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <h2>Questions</h2>
        <p>Answer the {{ questions.length }} questions below to assess your software's FAIRness.</p>
        <Question v-for="question, index in questions"
            v-bind:index="index"
            v-bind:key="question.id"
            v-bind:question="question"
        />
        <Badge />
    </div>
</template>


<script setup lang="ts">
import Badge from './components/Badge.vue'
import Question from './components/Question.vue'
import questions from './assets/questions.json'
</script>

<style scoped>
h1 {
    line-height: 1.2em;
    margin-top: 0.5em;
    margin-bottom: 2.0em;
}
</style>
