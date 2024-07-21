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
    label: 'Delete',
    icon: 'i-heroicons-trash',
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
        color="red"
        @click="$emit('click')"
    />
</template>
