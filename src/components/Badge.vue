<template>
    <div class="badge">
        <h2>Get the badge</h2>
        <h3>Markdown</h3>
        <p>{{ badge }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fairQueryParams } from '../store'
import { APP_BASE_URL } from '../constants'
import metadata from '../../package.json'
const [major, minor] = metadata.version.split('.').slice(0, 2)
const badge = computed(() => `[![FAIRness badge image](${APP_BASE_URL}/badge.svg)]` +
                             `(${APP_BASE_URL}/#/software?` +
                             `v=${major}.${minor}` +
                             fairQueryParams.value)
</script>

<style scoped>
</style>
