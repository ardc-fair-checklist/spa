import { computed, ref } from 'vue'

const nQuestions = 18;
const _state = ref("0".repeat(nQuestions));

export const state = computed(() => _state.value)
export const setState = (newState: string) => _state.value = newState
