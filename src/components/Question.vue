<template>
    <div class="question">
        <fieldset>
            <legend>{{ question.text }}</legend>

            <p class="guidance">{{ question.guidance }}</p>

            <Answer v-for="(answer, iAnswer) in question.answers"
                v-bind:answer="answer"
                v-bind:isChecked="compliance[question.index] === iAnswer"
                v-bind:key="answer.id"
                v-bind:onClick="onClick(iAnswer)"
            />
        </fieldset>
    </div>
</template>

<script setup lang="ts">
import Answer from './Answer.vue'
import { compliance } from '../store'
import { setQueryParams } from '../routing'

const props = defineProps<{
    question: {
        answers: {
            id: string,
            score: number,
            text: string
        }[],
        guidance: string,
        index: number,
        text: string
    }
}>()

const onClick = (index: number) => {
    return () => {
        const newCompliance = [
            ...compliance.value.slice(0, props.question.index),
            index,
            ...compliance.value.slice(props.question.index + 1)
        ]
        setQueryParams(newCompliance);
    }
}
</script>

<style scoped>
fieldset {
    margin-bottom: 3em;
    width: 40em;
}

p.guidance {
    font-size: smaller;
    margin-bottom: 4em;
    margin-top: 2em;
    display: none;
}

.question {
    display: flex;
    place-items: center;
    flex-direction: column;
}

h3 {
    place-self: flex-start;
}

</style>
