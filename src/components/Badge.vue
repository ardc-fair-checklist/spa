<template>
    <div>
        <h2>Get the badge</h2>
        <h3>Markdown</h3>
        <p>{{ badge }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { state } from '../store'
import { HOST_AND_ROUTE } from '../constants'
import metadata from '../../package.json'
const [major, minor] = metadata.version.split('.').slice(0, 2)
const badge = computed(() => `[![FAIRness badge image](${HOST_AND_ROUTE}/badge.svg)](${HOST_AND_ROUTE}?state=${state.value}&version=${major}.${minor})`)
</script>

<style scoped>
</style>
