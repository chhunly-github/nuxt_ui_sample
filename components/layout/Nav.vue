<script setup lang="ts">
import {useIcon} from "~/composables/useIcon";

const route = useRoute()

const links = [
    {
        label: 'Home',
        icon: useIcon().home,
        to: '/'
    },
    {
        label: 'Orders',
        icon: useIcon().list,
        to: '/orders'
    },
    {
        label: 'invoices',
        icon: useIcon().invoice,
        to: '/invoices'
    },
    {
        label: 'customers',
        icon: useIcon().customer,
        to: '/participants/customers'
    },
    {
        label: 'staffs',
        icon: useIcon().staff,
        to: '/participants/staffs'
    },
    {
        label: 'materials',
        icon: useIcon().material,
        to: '/materials'
    },
    {
        label: 'config',
        icon: useIcon().setting,
        to: '/config'
    },
]
</script>

<template>
    <UVerticalNavigation
        :links="links"
        :ui="{
            wrapper: 'bg-primary-100 dark:bg-primary-950 rounded-lg',
            base: 'flex-col',
            active: 'text-gray-900 dark:text-white before:bg-primary-400 dark:before:bg-primary-600/50',
            inactive: 'dark:text-gray-400 hover:text-primary-600 hover:bg-primary dark:hover:text-white hover:before:bg-primary-300 dark:hover:before:bg-gray-800/75',
            icon: {
                inactive: 'dark:text-primary-600 text-primary-600 group-hover:text-gray-700 dark:group-hover:text-gray-200',
            },
            badge: {
                base: 'absolute right-0 rounded',
                variant: 'soft',
                size: 'xs',
            },
            divider: {
                wrapper: {
                  base: 'p-2',
                },
            },
        }"
    >
    </UVerticalNavigation>
</template>

