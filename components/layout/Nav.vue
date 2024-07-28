<script setup lang="ts">
const route = useRoute()

const links = [
    {
        label: 'Home',
        icon: 'i-heroicons-home',
        to: '/'
    },
    {
        label: 'Orders',
        icon: 'i-heroicons-home',
        to: '/orders'
    },
    {
        label: 'invoices',
        icon: 'i-heroicons-home',
        to: '/invoices'
    },
    {
        label: 'customers',
        icon: 'i-heroicons-home',
        to: '/participants/customers'
    },
    {
        label: 'staffs',
        icon: 'i-heroicons-home',
        to: '/participants/staffs'
    },
    {
        label: 'materials',
        icon: 'i-heroicons-home',
        to: '/materials'
    },
    {
        label: 'config',
        icon: 'i-heroicons-home',
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
            inactive: 'dark:text-primary-600 hover:text-primary-600 hover:bg-primary dark:hover:text-white hover:before:bg-primary-300 dark:hover:before:bg-gray-800/75',
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

