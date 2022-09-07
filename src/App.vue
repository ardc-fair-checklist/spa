<template>
    <div>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <Question v-for="question in questions"
            v-bind:key="question.id"
            v-bind:question="question"
        />
    </div>
</template>


<script setup lang="ts">
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
