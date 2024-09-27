<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
withDefaults(defineProps<ButtonProp>(), {
    label: 'Cancel',
    icon: 'i-heroicons-x-circle',
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
