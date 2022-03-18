<script lang="ts">
    let left = '1.5rem';
    let body = document.body;

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('#site-nav ul');
        const computedStyle = getComputedStyle(navbar);
        const scroller = document.getElementById('navscroller');
        const scrollWidth = navbar.clientWidth - scroller.clientWidth - (parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight));
        const scrolled = window.scrollY / (body.clientHeight - window.innerHeight) * 100;

        left = parseFloat(computedStyle.paddingLeft) + scrolled / 100 * scrollWidth + 'px';
    })
</script>
<template>
    <span style:left={left} id="navscroller"></span>
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
    }
</style>