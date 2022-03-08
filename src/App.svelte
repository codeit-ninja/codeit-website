<svelte:head>
    <link rel="stylesheet" href="https://i.icomoon.io/public/temp/542dfce803/UntitledProject/style.css">
</svelte:head>
<script lang="ts">
    import About from './components/About.svelte';
    import Contact from './components/Contact.svelte';
    import Experience from './components/Experience.svelte';
    import Welcome from './components/Welcome.svelte';
</script>

<main id="site" class="codeit">
    <Welcome />
    <About />
    <Experience />
    <Contact />
</main>

<footer id="footer" class="text-center">
    <span class="fs-2 d-block">You have reached the end</span>
    This site was made with <i class="icon icon-svelte"></i>
</footer>