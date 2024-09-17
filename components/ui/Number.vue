<script setup lang="ts">
import type {NumberProp} from "~/components/ui/types";

withDefaults(defineProps<NumberProp>(), {
	fractionDigits: 2,
	notation: "standard"
});
</script>
<template>
	{{ value ? formatNumber(value, notation, fractionDigits) : '' }}
</template>