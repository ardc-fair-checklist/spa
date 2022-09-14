import { computed, ref } from 'vue'
import { questions, nQuestions, slices, nPointsMax } from './read-questions'

const scoreArrays = questions.map(q => q.answers.map(a => a.score))
const state = ref<number[]>(new Array(nQuestions.total).fill(0))

export const compliance = computed(() => state.value);
export const setCompliance = (newCompliance: number[]) => state.value = newCompliance

const summation = (previousValue: number, currentValue: number) => previousValue + currentValue;
export const scores = computed(() => state.value.map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer]))

export const progress = computed(() => {
    return {
        f: `${100 * scores.value.slice(...slices.f).reduce(summation, 0) / nPointsMax.f}%`,
        a: `${100 * scores.value.slice(...slices.a).reduce(summation, 0) / nPointsMax.a}%`,
        i: `${100 * scores.value.slice(...slices.i).reduce(summation, 0) / nPointsMax.i}%`,
        r: `${100 * scores.value.slice(...slices.r).reduce(summation, 0) / nPointsMax.r}%`,
        overall: `${100 * scores.value.reduce(summation) / nPointsMax.total}%`
    }
})
