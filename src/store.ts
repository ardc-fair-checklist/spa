import { computed, ref } from 'vue'
import { nQuestions } from './read-questions'

const state = ref(".".repeat(nQuestions.total).split('').map(() => 0))


export const compliance = computed(() => state.value);
export const setComplianceAt = (index: number, newCompliance: number) => state.value[index] = newCompliance
export const setCompliance = (newCompliance: number[]) => state.value = newCompliance

//const summation = (previousValue: number, currentValue: number) => previousValue + currentValue;
//export const progress = computed(() => {
//    return {
//        F: `${100 * state.value.score.slice(...slices.F).reduce(summation) / nPointsMax.F}%`,
//        A: `${100 * state.value.score.slice(...slices.A).reduce(summation) / nPointsMax.A}%`,
//        I: `${100 * state.value.score.slice(...slices.I).reduce(summation) / nPointsMax.I}%`,
//        R: `${100 * state.value.score.slice(...slices.R).reduce(summation) / nPointsMax.R}%`,
//        overall: `${100 * state.value.score.reduce(summation) / nPointsMax.total}%`
//    }
//})
