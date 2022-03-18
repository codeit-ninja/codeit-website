<script lang="ts">
    export let route;
    
    let active = false;

    window.addEventListener('scroll', () => {
        if( ! route.mounted ) return;

        active = route.active ? true : false;
    })
</script>
<template>
    <li><a href={`#${route.slug}`} class:active={active}><i class={route.icon}></i></a></li>
</template>