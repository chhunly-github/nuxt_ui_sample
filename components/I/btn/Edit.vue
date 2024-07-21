<script setup lang="ts">
defineEmits(['click']);
withDefaults(defineProps<{
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: 'soft' | 'link' | 'solid' | 'outline' | 'ghost',
    label?: string,
    icon?: string,
    loading?: boolean,
    disabled?: boolean
}>(), {
    size: 'sm',
    variant: 'solid',
    label: 'Edit',
    icon: 'i-heroicons-pencil-square',
    loading: false,
    disabled: false
});
</script>

<template>
    <UButton
        :size
        :variant
        :icon
        :label
        :disabled
        :loading
        color="primary"
        @click="$emit('click')"
    />
</template>
