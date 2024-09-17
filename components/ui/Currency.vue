<script setup lang="ts">
withDefaults(defineProps<{
	value: number | undefined,
	symbol?: string
}>(), {
	symbol: '$'
});
</script>
<template>
	${{ value ? formatNumber(value, 'standard', 2) : '' }}
</template>
