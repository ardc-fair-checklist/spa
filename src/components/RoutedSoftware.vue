<template>
    <main>
        <h1>ARDC FAIR for software<br>self-assessment checklist</h1>
        <p>Answer the {{ nQuestions.total }} questions below to assess your software's FAIRness.</p>
        <div class="aspect" v-for="aspect in ['F', 'A', 'I', 'R']" >
            <h2>{{ getFullAspect(aspect) }}</h2>
            <Question v-for="question in questions.filter(q => q.aspect === aspect)"
                v-bind:key="question.id"
                v-bind:question="question"
            />
            <p>{{ getFullAspect(aspect) }} state:</p>
            <ProgressBar v-if="aspect==='F'" v-bind:progress="progress.f"/>
            <ProgressBar v-if="aspect==='A'" v-bind:progress="progress.a"/>
            <ProgressBar v-if="aspect==='I'" v-bind:progress="progress.i"/>
            <ProgressBar v-if="aspect==='R'" v-bind:progress="progress.r"/>
        </div>
        <div class="overall-progress">
            <h2>FAIR state overall:</h2>
            <ProgressBar v-bind:progress="progress.overall"/>
        </div>
        <Badge />
    </main>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import ProgressBar from './ProgressBar.vue';
import Question from './Question.vue'
import { setQuestions, nQuestions, type QuestionType, questions } from '../store'
import { progress } from '../store'
import data from '../assets/0.1/questions.json'

setQuestions(data as QuestionType[])

const getFullAspect = (aspect: string) => {
    return {
        F: "Findable",
        A: "Accessible",
        I: "Interoperable",
        R: "Reusable"
    }[aspect]
}
</script>

<style scoped>
</style>
