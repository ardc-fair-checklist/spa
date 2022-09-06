<template>
    <fieldset>
        <legend>{{ question }}</legend>

        <div v-for="{answer, id} in answers" >
            <input type="radio" id="louie" value="louie" >
            <label for="louie">{{ answer }}</label>
        </div>

    </fieldset>
</template>

<script setup lang="ts">
defineProps<{
    answers: {
        answer: string,
        id: string
    }[]
    id: string
    question: string
}>()
</script>

<style scoped>
</style>
