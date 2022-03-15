<script lang="ts">
    import About from './components/About.svelte';
    import Contact from './components/Contact.svelte';
    import Experience from './components/Experience.svelte';
    import Portfolio from './components/Portfolio.svelte';
    import Welcome from './components/Welcome.svelte';
</script>

<main id="site" class="codeit">
    <Welcome />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
</main>

<footer id="footer" class="text-center">
    <span class="fs-2 d-block">You have reached the end</span>
</footer>