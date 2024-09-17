<script setup lang="ts">
defineProps<{
    title: string,
    description: string
}>();
</script>

<template>
    <UAlert
        icon="i-heroicons-information-circle"
        color="primary"
        variant="subtle"
        :title
        :description
    />
</template>

<style scoped>

</style>
