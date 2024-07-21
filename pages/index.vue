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
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <IInputSearch />
        <IInputText />
        <IInputFull />
        <IInputNumber />
        <IInputSearchMenu />
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <ILoadingBox />
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <IAlertInfo title="info" description="information alert"/>
        <IAlertWarn title="warning" description="warning"/>
        <IAlertError title="error" description="error occurred"/>
    </div>
    <div class="flex flex-row gap-5 flex-wrap p-5">
        <IBtnBasic @click="modal = true" color="teal" label="try dialog"/>
        <IModal v-model="modal" title="test dialog"/>
        <IImagePick />
    </div>

</template>

<style scoped>

</style>
