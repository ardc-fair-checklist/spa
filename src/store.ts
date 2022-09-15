import { computed, ref } from 'vue'
import { questions, nQuestions, slices, nPointsMax } from './read-questions'

const scoreArrays = questions.map(q => q.answers.map(a => a.score))
const state = ref<number[]>(new Array(nQuestions.total).fill(0))

export const compliance = computed(() => state.value);
export const setCompliance = (newCompliance: number[]) => state.value = newCompliance

const summation = (previousValue: number, currentValue: number) => previousValue + currentValue;
const scores = computed(() => state.value.map((iAnswer, iQuestion) => scoreArrays[iQuestion][iAnswer]))

export const progress = computed(() => {
    return {
        f: `${100 * scores.value.slice(...slices.f).reduce(summation, 0) / nPointsMax.f}%`,
        a: `${100 * scores.value.slice(...slices.a).reduce(summation, 0) / nPointsMax.a}%`,
        i: `${100 * scores.value.slice(...slices.i).reduce(summation, 0) / nPointsMax.i}%`,
        r: `${100 * scores.value.slice(...slices.r).reduce(summation, 0) / nPointsMax.r}%`,
        overall: `${100 * scores.value.reduce(summation) / nPointsMax.total}%`
    }
})

export const fairQueryParams = computed(() =>
    `&f=${compliance.value.slice(...slices.f).map(elem => elem.toString()).join('')}` +
    `&a=${compliance.value.slice(...slices.a).map(elem => elem.toString()).join('')}` +
    `&i=${compliance.value.slice(...slices.i).map(elem => elem.toString()).join('')}` +
    `&r=${compliance.value.slice(...slices.r).map(elem => elem.toString()).join('')}`)
