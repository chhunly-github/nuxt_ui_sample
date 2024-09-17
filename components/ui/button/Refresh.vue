<script setup lang="ts">
import type {ButtonProp} from "~/components/ui/types";

defineEmits(['click']);
const props = withDefaults(defineProps<ButtonProp>(), {
    size: 'md',
    variant: 'ghost'
});
</script>

<template>
    <UButton
        :size
        :variant
		icon="i-heroicons-outline-refresh"
        color="teal"
        @click="$emit('click')"
    >
    </UButton>
</template>
