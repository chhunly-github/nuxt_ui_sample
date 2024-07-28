<script setup lang="ts">

</script>

<template>
    <div
        class="
            fixed top-16 left-2 w-20  bg-background/75 backdrop-blur
            shadow-2xl ring-1 rounded-lg border-primary-200/75
            dark:border-primary-900/50
            sm:invisible 2xl:visible
        "
    >
        <div class="p-5">
            <UButton icon="i-heroicons-outline-plus" size="lg" :ui="{rounded: 'rounded-full'}"/>
        </div>
        <LayoutNav/>
    </div>
    <header
        class="fixed w-full h-12 bg-primary-100 dark:bg-primary-950 bg-background/75 backdrop-blur border-b-2 -mb-px top-0 z-50 border-primary-600/75 dark:border-primary-900/50">
        <div class="flex justify-between">
            <div class="flex gap-5">
                <LayoutProfileButton/>
                <LayoutBread/>
            </div>
            <div class="w-12 my-auto">
                <LayoutTheme />
            </div>
        </div>
    </header>
    <div class="container mx-auto pt-16">
        <div class="relative ring-1 rounded-md bg-background/75 backdrop-blur min-h-96">
            <slot/>
        </div>
    </div>
    <footer>hell</footer>


</template>

<style scoped>

</style>
