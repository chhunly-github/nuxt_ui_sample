<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        color="primary"
        icon="i-heroicons-clipboard"
        @click="$emit('click')"
        label="Update"
    />
</template>
