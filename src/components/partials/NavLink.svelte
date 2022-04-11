<script lang="ts">
    export let route;
</script>
<template>
    <li class="codeit-navlink" aria-labelledby={route.slug} class:active={route.active}>
        <a href={`#${route.slug}`}><i class={route.icon}></i></a>
    </li>
</template>