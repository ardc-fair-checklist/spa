<template>
    <div class="outer">
        <div class="inner" >
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    progress: string
}>()
</script>

<style scoped>
progress {
    border-radius: 0px;
    width: 100%;
    accent-color: #cc0070;
}

.outer {
    background-color: #808080;
    width: 100%;
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 3px;
}

.inner {
    background-color: #8E489B;
    height: 0.6em;
    width: v-bind('progress');
}
</style>
