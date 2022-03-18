<script lang="ts">
    import { onMount } from "svelte";
    import { routes } from '../../lib/_router';
    import { isInViewport } from "../../lib/_viewport";

    export let Template;
    export let index;

    onMount(() => {
        routes[index].mounted = true;
        
        window.addEventListener('scroll', async () => {
            routes[index].active = false;

            if(await isInViewport(`#${routes[index].slug}`, '00px 0px -500px 0px')) {                
                routes[index].active = true;
            }
        })
    })
</script>
<template>
    <Template />
</template>