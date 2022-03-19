<script lang="ts">
    import { onMount } from "svelte";
    import { routes } from '../../lib/_router';
    import { isInViewport } from "../../lib/_viewport";

    export let Template;
    export let index;

    onMount( async () => {
        if(await isInViewport(`#${routes[index].slug}`, '0px 0px -600px 0px')) routes[index].active = true;
        
        window.addEventListener('scroll', async () => {
            routes[index].active = false;

            if(await isInViewport(`#${routes[index].slug}`, '0px 0px -600px 0px')) {                
                routes[index].active = true;
            }
        })
        
        routes[index].mounted = true;
        routes[index].active = false;
    })
</script>
<template>
    <Template />
</template>