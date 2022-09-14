<template>
    <div class="badge">
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
import { slices } from '../read-questions'
const [major, minor] = metadata.version.split('.').slice(0, 2)
const badge = computed(() => `[![FAIRness badge image](${APP_BASE_URL}/badge.svg)]` +
                             `(${APP_BASE_URL}/#/software?` +
                             `v=${major}.${minor}` +
                             `&f=${compliance.value.slice(...slices.f).map(elem => elem.toString()).join('')}` +
                             `&a=${compliance.value.slice(...slices.a).map(elem => elem.toString()).join('')}` +
                             `&i=${compliance.value.slice(...slices.i).map(elem => elem.toString()).join('')}` +
                             `&r=${compliance.value.slice(...slices.r).map(elem => elem.toString()).join('')}`)
</script>

<style scoped>
.badge {
    padding-bottom: 10em;
}
</style>
