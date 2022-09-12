<template>
    <main>
        <h1>ARDC FAIR for software self-assessment checklist</h1>
        <h2>Questions</h2>
        <p>Answer the {{ questions.length }} questions below to assess your software's FAIRness.</p>
        <div class="aspect" v-for="aspect in ['F', 'A', 'I', 'R']" >
            <Question v-for="(question, index) in questions.filter(q => q.aspect === aspect)"
                v-bind:index="index"
                v-bind:key="question.id"
                v-bind:question="question"
            />
            <ProgressBar v-if="aspect==='F'" v-bind:progress="progress.F"/>
            <ProgressBar v-if="aspect==='A'" v-bind:progress="progress.A"/>
            <ProgressBar v-if="aspect==='I'" v-bind:progress="progress.I"/>
            <ProgressBar v-if="aspect==='R'" v-bind:progress="progress.R"/>
        </div>
        <ProgressBar v-bind:progress="progress.overall"/>
        <Badge />
    </main>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import ProgressBar from './ProgressBar.vue';
import Question from './Question.vue'
import { questions } from '../read-questions'
const progress = {
    F: '10%',
    A: '20%',
    I: '30%',
    R: '40%',
    overall: '50%'
}
</script>

<style scoped>
.aspect {
    margin-bottom: 10em;
}
</style>
