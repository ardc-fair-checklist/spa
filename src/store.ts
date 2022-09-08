import { computed, ref } from 'vue'

const nQuestions = 18;
const state = ref("0".repeat(nQuestions));

export const compliance = computed(() => state.value);
export const setCompliance = (newCompliance: string) => state.value = newCompliance;


export const complianceQueryParams = computed(() => `&f=${compliance.value.slice(0, 6)}` +
                                                    `&a=${compliance.value.slice(6, 10)}` +
                                                    `&i=${compliance.value.slice(10, 12)}` +
                                                    `&r=${compliance.value.slice(12, 18)})`)
