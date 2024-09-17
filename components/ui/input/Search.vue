<template>
    <UInput
        v-model="search"
        placeholder="Search..."
        icon="i-heroicons-magnifying-glass-20-solid"
        autocomplete="off"
        :ui="{ icon: { trailing: { pointer: '' } } }"
    >
        <template #trailing>
            <UButton
                v-show="search"
                color="gray"
                variant="link"
                icon="i-heroicons-x-mark-20-solid"
                :padded="false"
                @click="search = null"
            />
        </template>
    </UInput>
</template>

<script setup lang="ts">
const search = defineModel();
</script>

