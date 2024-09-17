<script
	setup
	lang="ts"
>
import type {QueryFilter} from "~/utils/types";
import {removeBlankObj} from "~/utils";

const filter = shallowRef<QueryFilter>({
	startDate: null,
	endDate: null,
	type: null,
	status: null,
	search: null,
})
const dateRange = ref({});
const onSearch = () =>{
	const query = removeBlankObj(filter.value);
	useRouter().push({
		query
	})
}
</script >

<template >
	<IDateRange v-model="dateRange" size="md"/>
	<FilterSelectType v-model="filter.type"/>
	<FilterSelectStatus v-model="filter.status"/>
	<IInputSearch size="md" v-model="filter.search"/>
	<IBtnSearch @click="onSearch"/>
</template >

<style scoped>

</style >