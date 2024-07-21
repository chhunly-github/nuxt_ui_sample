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
    label: 'Print',
    icon: 'i-heroicons-printer',
    loading: false,
    disabled: false
});
</script>

<template>
    <UButton
        :size
        :variant
        :label
        :icon
        :disabled
        :loading
        color="teal"
        @click="$emit('click')"
    />
</template>
