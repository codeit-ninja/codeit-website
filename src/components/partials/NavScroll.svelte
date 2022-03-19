<script lang="ts">
    import { onMount } from "svelte";
    import { pos } from "../../composables/_element";

    let left = 0;

    const startingPos = (rem: number) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

    onMount(() => {
        const navbar = document.querySelector('#site-nav ul');
        let currentlyActivePos = pos([...document.querySelectorAll('.codeit-navlink.active')].pop(), 'x')

        left = currentlyActivePos - pos(navbar, 'x') ;

        window.addEventListener('scroll', () => {
            currentlyActivePos = pos([...document.querySelectorAll('.codeit-navlink.active')].pop(), 'x')
            left = currentlyActivePos - pos(navbar, 'x');
        })
    })
</script>
<template>
    <span style:left={left ? left + 'px' : startingPos(1.5) + 'px'} id="navscroller"></span>
</template>
<style lang="scss" scoped>
    span {
        background-color: #17dbff;
        mix-blend-mode: difference;
        position: absolute;
        top: 50%;
        left: 0;
        height:  50px;
        width:  50px;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all .1s cubic-bezier(.97,.62,.65,1.26);
        //animation: jump .5s infinite;
    }

    @keyframes jump {
        from {
            transform: scaleX(1.4);
        }
        to {
            transform: scaleX(1);
        }
    }
</style>