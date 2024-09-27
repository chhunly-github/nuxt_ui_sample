<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
withDefaults(defineProps<ButtonProp>(), {
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
