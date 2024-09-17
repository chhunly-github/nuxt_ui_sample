<script
	setup
	lang="ts"
>
import {icons} from "~/utils";

const items: any = [
	{
		title: 'Edit',
		icon: icons.edit,
	},
	{
		label: 'Progress',
		icon: icons.waveSignal
	},
	{
		label: 'Note',
		icon: icons.note
	},
	{
		label: 'Setting',
		icon: icons.setting,
	},
	{
		label: 'Finish',
		icon: icons.clipboard
	},
	{
		label: 'Repair',
		icon: icons.tool1
	},
];
</script >

<template >
<slot :actions="items"/>
</template >

<style scoped>

</style >