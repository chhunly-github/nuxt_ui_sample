<script
	setup
	lang="ts"
>
const statuses = [{
	name: 'Pending',
	value: 'US'
}, {
	name: 'Approved',
	value: 'CA',
	disabled: true
}, {
	name: 'Finished',
	value: 'MX'
}];
const selected = defineModel();
</script >

<template >
	<USelect
		v-model="selected"
		:options="statuses"
		option-attribute="name"
		size="md"
		placeholder="Status"
	>
	</USelect >
</template >

<style scoped>

</style >