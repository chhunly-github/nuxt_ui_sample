<script setup lang="ts">

const onToggle = () => {
    useColorMode().preference = (useColorMode().preference === 'dark' ? 'light' : 'dark');
}
</script>

<template>
	<ClientOnly>
		<UButton
			icon="i-heroicons-moon-20-solid"
			size="sm"
			color="primary"
			variant="soft"
			:ui="{rounded: 'rounded-full'}"
			@click="onToggle"
			v-if="$colorMode.preference === 'dark'"
		/>
		<UButton
			icon="i-heroicons-sun-20-solid"
			size="sm"
			color="primary"
			:ui="{rounded: 'rounded-full'}"
			variant="soft"
			@click="onToggle"
			v-else
		/>
	</ClientOnly>
</template>

<style scoped>

</style>
