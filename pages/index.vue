<script setup lang="ts">

const date = ref();
const dateRange = ref({});
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

</template>

<style scoped>

</style>
