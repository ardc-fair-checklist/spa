<template>
    <div class="container">
        <h3>{{ index + 1 }}. {{ question.id }}</h3>
        <fieldset>
            <legend>{{ question.text }}</legend>

            <p class="guidance">{{ question.guidance }}</p>

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
import { state, setState } from '../store'

const props = defineProps<{
    index: number
    question: {
        answers: {
            text: string,
            id: string
        }[]
        guidance: string
        id: string
        text: string
    }
}>()

const isChecked = (index: number) => parseInt(state.value[props.index], 10) === index;
const onClick = (index: number) => {
    return () => {
        const newState = state.value.slice(0, props.index) + index.toString() +  state.value.slice(props.index + 1);
        setState(newState);
    }
}

</script>

<style scoped>
fieldset {
    margin-bottom: 5em;
    width: 40em;
}

p.guidance {
    font-size: smaller;
    margin-bottom: 4em;
    margin-top: 2em;
}

div.container {
    display: flex;
    place-items: center;
    flex-direction: column;
}

h3 {
    place-self: flex-start;
}

</style>
