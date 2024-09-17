<script
	setup
	lang="ts"
>
interface ActionItem {
	label: string;
	avatar: {src: string};
	icon: string;
	click: (row: any) => void;
	disable: (row: any) => boolean;
}
const props = defineProps<{
	items: Partial<ActionItem>[]
}>();
const dropDownItems = computed(() => {
	if(props.items) {
		return [props.items];
	}
	return [];
});
// const items = [
// 	[{
// 		label: 'Profile',
// 		avatar: {
// 			src: 'https://avatars.githubusercontent.com/u/739984?v=4'
// 		}
// 	}], [{
// 		label: 'Edit',
// 		icon: 'i-heroicons-pencil-square-20-solid',
// 		shortcuts: ['E'],
// 		click: () => {
// 			console.log('Edit')
// 		}
// 	}, {
// 		label: 'Duplicate',
// 		icon: 'i-heroicons-document-duplicate-20-solid',
// 		shortcuts: ['D'],
// 		disabled: true
// 	}], [{
// 		label: 'Archive',
// 		icon: 'i-heroicons-archive-box-20-solid'
// 	}, {
// 		label: 'Move',
// 		icon: 'i-heroicons-arrow-right-circle-20-solid'
// 	}], [{
// 		label: 'Delete',
// 		icon: 'i-heroicons-trash-20-solid',
// 		shortcuts: ['⌘', 'D']
// 	}]
// ]
</script >

<template >
	<UDropdown
		:items="dropDownItems"
		:popper="{ placement: 'bottom-start' }"
		:ui="{ item: { disabled: 'cursor-text select-text' } }"
	>
		<UButton
			label=""
			variant="soft"
			:trailing-icon="icons.verticalDot"
		/>
		<template #item="{ item }">
			<span class="truncate">{{ item.label }}</span>
			
			<UIcon :name="item.icon" :color="item.color" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
		</template>
	</UDropdown >
</template >

