<script setup lang="ts">

const date = ref();
const dateRange = ref({});
const modal = ref(false);
</script>

<template>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <IDateRange v-model="dateRange"/>
        <span>{{dateRange}}</span>
        <IDateSingle v-model="date"/>
        <span>{{date}}</span>
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <IBtnSubmit />
        <IBtnCancel />
        <IBtnEdit />
        <IBtnDelete />
        <IBtnInfo />
        <IBtnUpdate />
        <IBtnRefresh />
        <IBtnPrint />
        <IInputSearch />
        <IInputText />
        <IInputFull />
        <IInputNumber />
        <IInputSearchMenu />
        <ILoadingBox />
        <IColorPick />
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <IAlertInfo title="info" description="information alert" class="w-56"/>
        <IAlertWarn title="warning" description="warning" class="w-56"/>
        <IAlertError title="error" description="error occurred" class="w-56"/>
        <IBtnBasic @click="modal = true" color="teal" label="try dialog"/>
        <IModal v-model="modal" title="test dialog"/>
        <IImagePick />
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <UIcon v-for="i in Object.keys(useIcon())" :name="useIcon()[i]" class="h-6 w-6"/>
    </div>

</template>

<style scoped>

</style>
