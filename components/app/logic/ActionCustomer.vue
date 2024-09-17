<script
	setup
	lang="ts"
>
import {icons} from '~/utils';
const items: any = [
	{
		label: 'Info',
		icon: icons.infoCircle
	},{
		label: 'Edit',
		icon: icons.edit
	},{
		label: 'Delete',
		icon: icons.trash
	},
];
</script >

<template >
<slot :actions="items"/>
</template >

<style scoped>

</style >