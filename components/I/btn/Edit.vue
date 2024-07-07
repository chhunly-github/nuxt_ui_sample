<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        icon="i-heroicons-pencil-square"
        color="primary"
        @click="$emit('click')"
        label="Edit"
    />
</template>
