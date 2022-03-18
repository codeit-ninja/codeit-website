<script lang="ts">
    import Component from './core/Component.svelte';
    import { onMount } from 'svelte';
    import { routes } from '../lib/_router';

    let components = [];

    onMount(async() => {
        for(let i = 0;i < routes.length;i++) {
            const component = await routes[i].component();
            components = [...components, component.default];
        }
    })
</script>
<template>
    {#each components as Template, index}
        <Component {Template} {index} />
    {/each}
</template>