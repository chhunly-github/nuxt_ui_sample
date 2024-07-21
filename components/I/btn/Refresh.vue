<script setup lang="ts">
defineEmits(['click']);
const props = withDefaults(defineProps<{
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: 'soft' | 'link' | 'solid' | 'outline' | 'ghost'
}>(), {
    size: 'md',
    variant: 'ghost'
});
const iconSize = computed(() => {
   switch (props.size) {
       case "2xs":
       case "xs": return '1em';
       case "sm": return '1.2em';
       case "md": return '1.4em';
       case "lg": return '1.6em';
       default: return '2em';
   }
});
</script>

<template>
    <UButton
        :size
        :variant
        color="teal"
        @click="$emit('click')"
    >
        <IIconRefresh :size="iconSize"/>
    </UButton>
</template>
