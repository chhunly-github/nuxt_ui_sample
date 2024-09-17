<script setup lang="ts">
import type {ButtonVariant} from "#ui/types";
interface Color {
	icon: string,
	value: string,
	variant: ButtonVariant
}
const colors = <Partial<Color>[]>[
    {icon: 'i-ph-drop-slash', value: 'white', variant: 'outline'},
    {icon: 'i-ph-drop', value: 'sky'},
    {icon: 'i-ph-drop', value: 'teal'},
    {icon: 'i-ph-drop', value: 'green'},
    {icon: 'i-ph-drop', value: 'amber'},
    {icon: 'i-ph-drop', value: 'orange'},
    {icon: 'i-ph-drop', value: 'red'},
    {icon: 'i-ph-drop', value: 'purple'},
    {icon: 'i-ph-drop', value: 'pink'},
];
const color = defineModel();
</script>

<template>
    <div>
        <UChip size="md" inset class="mr-1" :show="c.value === color" v-for="c in colors" >
            <template #content>
                <UIcon name="i-material-symbols-check" />
            </template>
            <UButton :icon="c.icon" :color="c.value" label=""
                     :variant="c.variant || 'solid'"
                     :ui="{ rounded: 'rounded-full' }"
                     @click="color = c.value"
            />
        </UChip>
    </div>
</template>

<style scoped>

</style>
