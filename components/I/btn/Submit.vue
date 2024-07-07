<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        color="primary"
        icon="i-heroicons-check-circle"
        @click="$emit('click')"
        label="Submit"
    />
</template>
