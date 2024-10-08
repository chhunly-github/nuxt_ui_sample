<script
	lang="ts"
	setup
>

import {type ActionItem, pageLimits, type TableColumn} from "~/components/ui/types";

const emit = defineEmits(['reset']);
const props = withDefaults(defineProps<{
	columns?: TableColumn[],
	aliasRecord?: string,
	height?: string,
	apiUrl: string,
	filter?: QueryFilter,
	actions?: ActionItem[]
}>(), {
	columns: [],
	height: '24rem',
	aliasRecord: 'records',
	actions: []
});

const selectedColumns = ref(props.columns)
const columnsTable = computed(() => props.columns.filter((column) => selectedColumns.value.includes(column)))

// Pagination
const sort = ref({column: 'id', direction: 'asc' as const})
const page = defineModel<number>('page', {default: 1});
const limit = defineModel<number>('limit', {default: 25});
const total = ref<number>(0);
const recordFrom = computed(() => (page.value - 1) * limit.value + 1)
const recordTo = computed(() => Math.min(page.value * limit.value, total.value))
const serverFilter = computed(() => props.filter);
const {$api} = useNuxtApp()
const onReset = () => {
	selectedColumns.value = props.columns;
	emit('reset');
}
// Data
const {data: result, status} = await useLazyAsyncData<any>(props.apiUrl, () => $api(`${props.apiUrl}`, {
	query: {
		...props.filter,
		'page': page.value,
		'limit': limit.value,
		'sort': sort.value.column,
		'order': sort.value.direction
	}
}), {
	default: () => {
		return {}
	},
	watch: [page, serverFilter, limit, sort]
});
watchEffect(() => {
	if (result.value) {
		total.value = result.value.total;
	}
})
</script >

<template >
	<UCard
		:ui="{
			base: '',
			ring: '',
			divide: 'divide-y divide-gray-200 dark:divide-gray-700',
			header: { padding: 'px-4 py-5' },
			body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
			footer: { padding: 'p-4' }
		}"
		class="w-full"
	>
		<!-- Table -->
		<div
			:style="{height: height}"
			class="flex flex-col"
		>
			<UTable
				v-model:sort="sort"
				:columns="columnsTable"
				:loading="(status == 'pending')"
				:rows="result[aliasRecord] || []"
				:ui="{
					td: { base: 'max-w-[0] truncate' },
					default: { checkbox: { color: 'gray' } },
					th: { base: 'sticky top-0 bg-primary-500/70 dark:bg-primary-700/70 backdrop-blur z-50' }
				}"
				class="w-full"
				sort-asc-icon="i-heroicons-arrow-up"
				sort-desc-icon="i-heroicons-arrow-down"
				sort-mode="manual"
			>
				<template
					v-for="(_, name) in $slots"
					v-slot:[name]="slotData"
				>
					<slot
						:name="name"
						v-bind="slotData"
					/>
				</template >
				<template #index-data="{index}">{{ recordFrom + index }}</template >
				<template #actions-data="{index}">
					<UiButtonAction :items="actions"/>
				</template >
			</UTable >
		</div >
		
		<!-- Number of rows & Pagination -->
		<template #footer>
			<div class="flex flex-wrap justify-between items-center">
				<!-- Header and Action buttons -->
				<div class="flex justify-between items-center w-96 px-4">
					<div class="flex gap-1.5 items-center">
						
						<USelectMenu
							v-model="selectedColumns"
							:options="columns"
							multiple
						>
							<UButton
								color="gray"
								icon="i-heroicons-view-columns"
								size="xs"
							>
								Columns
							</UButton >
						</USelectMenu >
						
						<UButton
							color="gray"
							icon="i-heroicons-funnel"
							size="xs"
							@click="onReset"
						>
							Reset
						</UButton >
					</div >
				</div >
				<div class="flex justify-between items-center gap-5 px-4">
					<div >
						<span class="text-sm leading-5">
						Showing
						<span class="font-medium">{{ recordFrom }}</span >
						to
						<span class="font-medium">{{ recordTo }}</span >
						of
						<span class="font-medium">{{ total }}</span >
						results
						</span >
					</div >
					<div class="flex items-center gap-1.5">
						<span class="text-sm leading-5">Rows per page:</span >
						
						<USelect
							v-model="limit"
							:options="pageLimits"
							value-attribute="value"
							option-attribute="title"
							class="me-2 w-20"
							size="xs"
						/>
					</div >
					<UPagination
						v-model="page"
						:page-count="limit"
						:total="total"
						:ui="{
                        wrapper: 'flex items-center gap-1',
                        rounded: '!rounded-full min-w-[32px] justify-center',
                        default: {
                            activeButton: {
                                variant: 'outline'
                            }
                        }
                    }"
					/>
				</div >
			</div >
		</template >
	</UCard >
</template >