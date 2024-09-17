<script
	setup
	lang="ts"
>
const types = [{
	name: 'Ring',
	value: 'US'
}, {
	name: 'Bracelet',
	value: 'CA',
	disabled: true
}, {
	name: 'Earing',
	value: 'MX'
}]

const selected = defineModel();
</script >

<template >
	<USelect
		v-model="selected"
		:options="types"
		option-attribute="name"
		placeholder="Type"
		size="md"
	></USelect >
</template >

<style scoped>

</style >