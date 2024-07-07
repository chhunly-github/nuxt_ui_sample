<script setup lang="ts">
import { format } from 'date-fns'
const model = defineModel<Date | number>();
const view = computed(() => {
    return model.value ? format(model.value, 'dd/MM/yyyy') : 'dd/mm/yyyy';
})
</script>

<template>
    <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton icon="i-heroicons-calendar-days-20-solid" :label="view" />

        <template #panel="{ close }">
            <IDatePicker :range="false" v-model="model" is-required @close="close" />
        </template>
    </UPopover>
</template>

