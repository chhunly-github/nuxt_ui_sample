<script setup lang="ts">

const date = ref();
const dateRange = ref({});
const modal = ref(false);
</script>

<template>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <UiInputDateRange v-model="dateRange"/>
        <span>{{dateRange}}</span>
        <UiInputDateSingle v-model="date"/>
        <span>{{date}}</span>
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <UiButtonSubmit />
        <UiButtonCancel />
        <UiButtonEdit />
        <UiButtonDelete />
        <UiButtonInfo />
        <UiButtonUpdate />
        <UiButtonRefresh />
        <UiButtonPrint />
        <UiInputSearch />
        <UiInputText />
        <UiInputNumber />
        <UiLoadingBox />
        <UiInputColor />
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <UiAlertInfo title="info" description="information alert" class="w-56"/>
        <UiAlertWarn title="warning" description="warning" class="w-56"/>
        <UiAlertError title="error" description="error occurred" class="w-56"/>
        <UiButtonBasic @click="modal = true" color="teal" label="try dialog"/>
        <UiModal v-model="modal" title="test dialog"/>
        <UiInputImage />
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <UIcon v-for="i in Object.keys(useIcon())" :name="useIcon()[i]" class="h-6 w-6"/>
    </div>

</template>

<style scoped>

</style>
