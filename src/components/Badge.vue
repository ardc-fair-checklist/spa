<template>
    <div class="badge">
        <h2>Get the badge</h2>
        <h3>Markdown</h3>
        <p>{{ badge.markdown.value }}</p>
        <h3>ReStructured Text</h3>
        <p>{{ badge.rst.value }} </p>
        <h3>HTML</h3>
        <p>{{ badge.html.value }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { fairQueryParams } from '../store'
import { APP_BASE_URL } from '../constants'
import metadata from '../../package.json'
const [major, minor] = metadata.version.split('.').slice(0, 2)
const badge = {
    html: computed(() => `<a href="${APP_BASE_URL}/#/software?` +
                         `v=${major}.${minor}` +
                         `${fairQueryParams.value}">` +
                         `<img src="${APP_BASE_URL}/badge.svg" ` +
                         `alt="FAIR checklist badge"></a>`),
    markdown: computed(() => `[![FAIRness badge image](${APP_BASE_URL}/badge.svg)]` +
                             `(${APP_BASE_URL}/#/software?` +
                             `v=${major}.${minor}` +
                             `${fairQueryParams.value}`),
    rst: computed(() => `<rst badge placeholder>`)
}
</script>


<style scoped>
</style>
