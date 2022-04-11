<script lang="ts">
    import { onMount } from "svelte";
    import { isInViewport } from "../../lib/_viewport";
    import { router } from '../../lib/_router';
    import { debounce } from 'underscore'

    export let template;
    export let index;

    const setActiveRoute = async () => {
        $router[index].active = false;

        if( await isInViewport(`#${$router[index].slug}`, '0px 0px -600px 0px' ) ) {                
            $router[index].active = true;
        }
    }

    onMount( async () => {
        setActiveRoute();
        
        window.addEventListener('scroll', debounce(setActiveRoute, 50))
        
        $router[index].mounted = true;
    })
</script>
<template>
    <svelte:component this={template} />
</template>