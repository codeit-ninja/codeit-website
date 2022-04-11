<script lang="ts">
    export let active;

    import { pos } from "../../composables/_element";
    import { getCssVariable } from "../../composables/_core";

    let left = 0;
    let prevActiveNavItem = null;
    let navbar = document.querySelector('#site-nav ul');

    const startingPos = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    
    $: activeNavItem = active ? document.querySelector(`[aria-labelledby=${active.slug}]`) as HTMLElement : null;
    $: currentlyActivePos = pos(activeNavItem, 'x');
    $: {
        navbar = document.querySelector('#site-nav ul');

        if( activeNavItem && activeNavItem !== prevActiveNavItem ) {
            left = currentlyActivePos - pos(navbar, 'x');
            activeNavItem.querySelector('a').style.color = getCssVariable('--bs-primary');
        }
        
        if( prevActiveNavItem && prevActiveNavItem !== activeNavItem ) {
            prevActiveNavItem.querySelector('a').style.color = getCssVariable('--bs-white');
        }

        prevActiveNavItem = activeNavItem;
    }
</script>

<template>
    <span
        style:left={left ? left + "px" : startingPos(1.5) + "px"}
        id="navscroller"
    />
</template>

<style lang="scss" scoped>
    span {
        background-color: #17dbff;
        position: absolute;
        top: 50%;
        left: 0;
        height: 50px;
        width: 50px;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all 0.05s cubic-bezier(0.22, 0.4, 0.92, 0.66);
        z-index: -1;
        //animation: jump .5s forwards;
    }

    @keyframes jump {
        from {
            transform: scaleX(3.4), translateY(-50%);
        }
        to {
            transform: scaleX(1), translateY(-50%);
        }
    }
</style>
