<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
withDefaults(defineProps<ButtonProp>(), {
    label: 'Info',
    icon: 'i-heroicons-information-circle',
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
