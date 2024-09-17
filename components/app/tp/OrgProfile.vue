<script
	setup
	lang="ts"
>

</script >

<template >
	<ClientOnly>
		<Teleport to="#layout-org-profile">
			<UButton :icon="useIcon().setting"/>
			something to say that org
		</Teleport>
	</ClientOnly>
</template >

<style scoped>

</style >