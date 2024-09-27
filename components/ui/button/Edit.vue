<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
withDefaults(defineProps<ButtonProp>(), {
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
