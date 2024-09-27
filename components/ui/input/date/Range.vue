<script
	setup
	lang="ts"
>
import {sub, format, isSameDay, type Duration} from 'date-fns'

interface DateRange {
	start: Date,
	end: Date
}

const ranges = [
	{label: 'Last 7 days', duration: {days: 7}},
	{label: 'Last 14 days', duration: {days: 14}},
	{label: 'Last 30 days', duration: {days: 30}},
	{label: 'Last 3 months', duration: {months: 3}},
	{label: 'Last 6 months', duration: {months: 6}},
	{label: 'Last year', duration: {years: 1}}
]
// const selected = ref({ start: sub(new Date(), { days: 14 }), end: new Date() })
const model = defineModel<DateRange>();

function isRangeSelected(duration: Duration) {
	if (!model.value || !model.value.start) {
		return false;
	}
	return isSameDay(model.value.start, sub(new Date(), duration)) && isSameDay(model.value.end, new Date())
}

function selectRange(duration: Duration) {
	model.value = {start: sub(new Date(), duration), end: new Date()}
}

const view = (date: Date, alias: string = 'dd/mm/yy') => {
	if (!date) {
		return alias;
	}
	return format(date, 'dd/MM/yy')
}
</script >

<template >
	<div class="w-54 relative">
		<UPopover :popper="{ placement: 'bottom-start' }">
			<UInput
				leading-icon="i-heroicons-calendar-days-20-solid"
				:model-value="`${view(model.start)} - ${view(model.end)}`"
				:ui="{
					base: 'hover:cursor-pointer'
				}"
			>
			</UInput >
			
			<template #panel="{ close }">
				<div class="flex items-center sm:divide-x divide-gray-200 dark:divide-gray-800">
					<div class="hidden sm:flex flex-col py-4">
						<UButton
							v-for="(range, index) in ranges"
							:key="index"
							:label="range.label"
							color="gray"
							variant="ghost"
							class="rounded-none px-6"
							:class="[isRangeSelected(range.duration) ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50']"
							truncate
							@click="selectRange(range.duration)"
						/>
					</div >
					
					<UiInputDatePicker
						:range="true"
						v-model="model"
						@close="close"
					/>
				</div >
			</template >
		</UPopover >
		<UButton
			v-show="!!model.start"
			class="absolute right-1.5 inset-y-1.5"
			color="gray"
			variant="link"
			icon="i-heroicons-x-mark-20-solid"
			:padded="false"
			@click="model = {}"
		/>
	</div>
</template >

