<script lang="ts">
    export let route;
    
    let active = false;

    window.addEventListener('scroll', () => {
        if( ! route.mounted ) return;

        active = route.active ? true : false;
    })
</script>
<template>
    <li class="codeit-navlink" aria-labelledby={route.slug} class:active={active}><a href={`#${route.slug}`}><i class={route.icon}></i></a></li>
</template>