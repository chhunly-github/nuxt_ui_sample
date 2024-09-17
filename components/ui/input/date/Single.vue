<script
	setup
	lang="ts"
>
import {format} from 'date-fns'

const model = defineModel<Date | number>();
const view = computed(() => {
	return model.value ? format(model.value, 'dd/MM/yyyy') : 'dd/mm/yyyy';
})
</script >

<template >
	<UPopover :popper="{ placement: 'bottom-start' }">
		<UInput
			leading-icon="i-heroicons-calendar-days-20-solid"
			size="md"
			variant="outline"
			:model-value="view"
			:ui="{
					base: 'hover:cursor-pointer'
				}"
		/>
		
		<template #panel="{ close }">
			<UiInputDatePicker
				:range="false"
				v-model="model"
				is-required
				@close="close"
			/>
		</template >
	</UPopover >
</template >

