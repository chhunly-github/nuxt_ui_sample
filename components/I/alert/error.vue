<script setup lang="ts">
defineProps<{
    title: string,
    description: string
}>();
</script>

<template>
    <UAlert
        icon="i-heroicons-x-circle"
        color="red"
        variant="subtle"
        :title
        :description
    />
</template>

<style scoped>

</style>
