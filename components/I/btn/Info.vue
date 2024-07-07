<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        color="primary"
        icon="i-heroicons-information-circle"
        @click="$emit('click')"
        label="Info"
    />
</template>
