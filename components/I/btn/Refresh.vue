<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
    <UButton
        size="sm"
        color="yellow"
        @click="$emit('click')"
        variant="soft"
    >
        <IIconRefresh />
    </UButton>
</template>
