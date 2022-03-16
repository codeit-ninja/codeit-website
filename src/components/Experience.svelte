<div class="codeit-section mt-5" id="experience">
    <div class="codeit-section-container container">
        <header class="codeit-section-header mt-auto">
            <span>What skills I have</span>
            <h1>Experience</h1>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="codeit-tiles">
                <div class="codeit-tiles-tile">
                    <div class="codeit-tiles-tile-header">
                        <h3>{codeit.skill.frontend.title}</h3>
                    </div>
                    <ul class="codeit-skills-list">
                        {#each codeit.skill.frontend.skills as skill}
                            <li>
                                <strong class="d-block">{skill.name}</strong>
                                <span class="d-block">{skill.level === 1 ? 'Experienced' : 'Intermediate'}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="codeit-tiles-tile">
                    <div class="codeit-tiles-tile-header">
                        <h3>{codeit.skill.backend.title}</h3>
                    </div>
                    <ul class="codeit-skills-list">
                        {#each codeit.skill.backend.skills as skill}
                            <li>
                                <strong class="d-block">{skill.name}</strong>
                                <span class="d-block">{skill.level === 1 ? 'Experienced' : 'Intermediate'}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import { codeit } from '../test';
    import gsap from "gsap";
    import { isInViewport } from "../lib/_viewport";
    import { onMount } from "svelte";
    
    onMount( async () => {
        if(await isInViewport(document.getElementById('experience'))) {
            gsap.fromTo('#experience .codeit-tiles-tile', 
                {
                    opacity: 0,
                    transform: 'translateY(20px)'
                },
                {
                    opacity: 1,
                    transform: 'translateY(0)',
                    duration: .3,
                    stagger: .1
                }
            )
        }
    })
</script>