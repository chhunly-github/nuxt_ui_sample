<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
withDefaults(defineProps<ButtonProp>(), {
    size: 'sm',
    variant: 'solid',
    label: 'Search',
    icon: 'i-heroicons-magnifying-glass-20-solid',
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
        color="teal"
        @click="$emit('click')"
    />
</template>
