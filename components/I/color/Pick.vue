<script setup lang="ts">
const colors = [
    {icon: 'i-heroicons-paint-brush', value: 'white', variant: 'outline'},
    {icon: ' ', value: 'sky'},
    {icon: ' ', value: 'teal'},
    {icon: ' ', value: 'green'},
    {icon: ' ', value: 'amber'},
    {icon: ' ', value: 'orange'},
    {icon: ' ', value: 'red'},
    {icon: ' ', value: 'purple'},
    {icon: ' ', value: 'pink'},
];
const color = defineModel();
</script>

<template>
    <UChip size="3xl" :show="c.value === color" v-for="c in colors" >
        <template #content>
            <UIcon name="i-heroicons-check-circle"/>
        </template>
        <UButton :icon="c.icon" :color="c.value" label=""
                 :variant="c.variant ? c.variant : 'solid'"
                 :ui="{ rounded: 'rounded-full' }"
                 @click="color = c.value"
        />
    </UChip>
</template>

<style scoped>

</style>
