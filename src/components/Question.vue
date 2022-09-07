<template>
    <div>
        <h2>{{ question.id }}</h2>
        <fieldset>
            <legend>{{ question.text }}</legend>

            <Answer v-for="(answer, index) in question.answers"
                v-bind:answer="answer"
                v-bind:isChecked="isChecked(index)"
                v-bind:key="answer.id"
                v-bind:onClick="onClick(index)"
            />

        </fieldset>
    </div>
</template>

<script setup lang="ts">
import Answer from './Answer.vue'
const props = defineProps<{
    index: number
    question: {
        answers: {
            text: string,
            id: string
        }[]
        id: string
        text: string
    }
}>()

const nQuestions = 18;
const state = "0".repeat(nQuestions);
const isChecked = (index: number) => parseInt(state[props.index], 10) === index;
const onClick = (index: number) => {
    return () => {
        const newState = state.slice(0, props.index) + index.toString() +  state.slice(props.index + 1);
        console.log(newState);
    }
}

</script>

<style scoped>
fieldset {
    margin-bottom: 5em;
}

</style>
