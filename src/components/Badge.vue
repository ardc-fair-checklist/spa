<template>
    <h2>Get the badge</h2>
    {{ HOST_AND_ROUTE }}?state="{{ state }}"&version="{{ major }}.{{ minor }}"
</template>

<script setup lang="ts">
import { state } from '../store'
import { HOST_AND_ROUTE } from '../constants'
import metadata from '../../package.json'
console.info(metadata)
const [major, minor] = metadata.version.split('.').slice(0, 2)
</script>

<style scoped>
</style>
