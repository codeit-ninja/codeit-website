<script lang="ts">
    import { router } from '../../lib/_router';
    import NavLink from './NavLink.svelte';
    import NavScroll from './NavScroll.svelte';

    $: activeRoute = $router.filter(route => route.active).pop();
</script>
<template>
    <nav id="site-nav">
        <ul class="text-left">
            <NavScroll active={activeRoute}/>
            {#each $router as route}
                <NavLink route={route} />
            {/each}
        </ul>
    </nav>
</template>