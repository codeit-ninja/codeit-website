<script lang="ts">
    import { routes } from '../../lib/_router';
    import NavLink from './NavLink.svelte';
    import NavScroll from './NavScroll.svelte';

    

    console.log(routes)
</script>
<template>
    <nav id="site-nav">
        <ul class="text-left">
            <NavScroll />
            {#each routes as route}
                <NavLink route={route} />
            {/each}
        </ul>
    </nav>
</template>