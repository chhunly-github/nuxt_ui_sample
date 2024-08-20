<script setup lang="ts">
withDefaults(defineProps<{
	value: number | undefined,
	notation?: "standard" | "scientific" | "engineering" | "compact" | undefined,
	fractionDigits?: number
}>(), {
	fractionDigits: 2,
	notation: "standard"
});
</script>
<template>
	{{ value ? formatNumber(value, notation, fractionDigits) : '' }}
</template>