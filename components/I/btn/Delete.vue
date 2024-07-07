<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        icon="i-heroicons-trash"
        color="red"
        @click="$emit('click')"
        label="Delete"
    />
</template>
