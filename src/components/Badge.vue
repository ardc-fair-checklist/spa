<template>
    <div>
        <h2>Get the badge</h2>
        <h3>Markdown</h3>
        <p>{{ badge }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { compliance } from '../store'
import { APP_BASE_URL } from '../constants'
import metadata from '../../package.json'
const [major, minor] = metadata.version.split('.').slice(0, 2)
const badge = computed(() => `[![FAIRness badge image](${APP_BASE_URL}/badge.svg)]` +
                             `(${APP_BASE_URL}/#/software?` +
                             `v=${major}.${minor}` +
                             `&f=${compliance.value.slice(0, 6)}` +
                             `&a=${compliance.value.slice(6, 10)}` +
                             `&i=${compliance.value.slice(10, 12)}&r=${compliance.value.slice(12, 18)})`)
</script>

<style scoped>
</style>
