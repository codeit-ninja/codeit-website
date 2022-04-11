<script lang="ts">
    import Component from './core/Component.svelte';
    import { onMount } from 'svelte';
    import { router } from '../lib/_router';

    let components = [];

    onMount(async() => {
        for(let i = 0;i < $router.length;i++) {
            const component = await $router[i].component();
            components = [...components, component.default];
        }
    })
</script>
<template>
    {#each components as template, index}
        <Component {template} {index} />
    {/each}
</template>