<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
withDefaults(defineProps<ButtonProp>(), {
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
