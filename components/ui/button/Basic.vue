<script setup lang="ts">
defineEmits(['click']);
withDefaults(defineProps<{
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: 'soft' | 'link' | 'solid' | 'outline' | 'ghost',
    color?: 'primary' | 'teal' | 'red',
    label?: string,
    icon?: string,
    loading?: boolean,
    disabled?: boolean
}>(), {
    size: 'sm',
    variant: 'solid',
    label: '',
    icon: '',
    color: 'primary',
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
        :color
        :disabled
        :loading
        @click.prevent="$emit('click')"
    />
</template>
