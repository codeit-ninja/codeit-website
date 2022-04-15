<script lang="ts">
    import Timeline from "./partials/Timeline.svelte";
    import { codeit } from '../test';
    import ProfilePhoto from '../assets/70400205_2466634653383095_1230927117248626688_o.jpg';
</script>
<template>
    <div class="code-it-cv">
        <div class="container-fluid h-100">
            <div class="row g-5 mt-auto h-100">
                <div class="col-3">
                    <section>
                        <h5># skills</h5>
                        <ul class="skill-list">
                            {#each codeit.skill.frontend.skills as skill}
                                <li>
                                    <span class="d-block">{skill.name}</span>
                                    <progress value={skill.percentage} max="100"></progress>
                                </li>
                            {/each}
                        </ul>
                        <ul class="skill-list">
                            {#each codeit.skill.backend.skills as skill}
                                <li>
                                    <span class="d-block">{skill.name}</span>
                                    <progress value={skill.percentage} max="100"></progress>
                                </li>
                            {/each}
                        </ul>
                    </section>
                    <section>
                        <h4>Contact gegevens</h4>
                        <dl>
                            <dd><i class="bi bi-envelope me-3"></i><span class="ff-monospace">richard@codeit.ninja</span></dd>
                            <dd><i class="bi bi-phone me-3"></i><span class="ff-monospace">+31637409282</span></dd>
                            <dd><i class="bi bi-github me-3"></i><span class="ff-monospace">https://github.com/codeit-ninja</span></dd>
                        </dl>
                    </section>
                </div>
                <div class="col-9 align-self-end">
                    <Timeline />
                </div>                    
            </div>
        </div>
        <!-- <header class="text-center m-5">
            <span class="text-white">Hallo, ik ben</span>
            <h1>Richard</h1>
            <span>Ik schrijf code</span>
        </header>
        <div class="d-flex mt-auto">
            <div>
                <aside class="mb-5">
                    <h5 class="mb-4">Front-end</h5>
                    <ul class="skill-list-left">
                        {#each codeit.skill.frontend.skills as skill}
                            <li>
                                <span class="d-block">{skill.name}</span>
                            </li>
                        {/each}
                    </ul>
                </aside>
                <aside>
                    <h5 class="mb-4">Back-end</h5>
                    <ul class="skill-list-left">
                        {#each codeit.skill.backend.skills as skill}
                            <li>
                                <span class="d-block">{skill.name}</span>
                            </li>
                        {/each}
                    </ul>
                </aside>
            </div>
            <Timeline />
        </div> -->
        <div id="background-wallpaper"></div>
    </div>
</template>