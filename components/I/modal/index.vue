<script setup lang="ts">
import {ar} from "date-fns/locale";

const emit = defineEmits(['close'])
defineProps<{
    title: string,
}>();
const isOpen = defineModel();
const onClose = (arg: any = null) => {
    emit('close', arg);
    isOpen.value = false;
}
</script>

<template>
    <div>
        <UModal v-model="isOpen">
            <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                <template #header >
                 <div class="flex justify-between align-center">
                     <slot name="title">
                        <h1>{{title}}</h1>
                     </slot>
                    <IBtnCancel label="" variant="soft" @click="onClose"/>
                 </div>
                </template>
                <slot name="default" >
                    Override default pls!!!😉
                </slot>
                <template #footer>
                    <slot name="footer" />
                </template>
            </UCard>
        </UModal>
    </div>
</template>

