<script setup lang="ts">
defineProps<{
    title: string,
    description: string
}>();
</script>

<template>
    <UAlert
        icon="i-heroicons-exclamation-circle"
        color="orange"
        variant="subtle"
        :title
        :description
    />
</template>

<style scoped>

</style>
