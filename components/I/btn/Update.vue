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
    label: 'Update',
    icon: 'i-heroicons-clipboard',
    loading: false,
    disabled: false
});
</script>

<template>
    <UButton
        :size
        :icon
        :label
        :variant
        :disabled
        :loading
        color="primary"
        @click="$emit('click')"
    />
</template>
