<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        color="red"
        icon="i-heroicons-x-circle"
        @click="$emit('click')"
        label="Cancel"
    />
</template>
