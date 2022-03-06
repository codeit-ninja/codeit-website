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
</script>