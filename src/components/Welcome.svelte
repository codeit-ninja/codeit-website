<div class="codeit-section min-vh-100" id="welcome">
    <div class="codeit-section-container container min-vh-100">
        <header class="codeit-section-header mt-auto">
            <span class="text-white">Hallo, ik ben</span>
            <h1>{codeit.owner}</h1>
            <span>Ik schrijf code</span>
            <div class="codeit-section-header-buttons flex-column flex-sm-row">
                <a role="button" class="btn btn-lg btn-outline-secondary mb-0" href="https://wa.me/+31637409282" target="_blank">WhatsApp</a>
                <a role="button" class="btn btn-lg btn-secondary" href="#contact">Stuur mij een bericht</a>
            </div>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="row">
                <div class="col-lg-3 d-flex flex-lg-column gap-3 align-self-center text-center codeit-social align-items-center justify-content-center mb-5 mb-lg-0">
                    <a href="https://www.linkedin.com/in/richard-mauritz-53681b206/" target="_blank"><i class="icon icon-linkedin"></i></a>
                    <a href="https://github.com/codeit-ninja" target="_blank"><i class="icon icon-github"></i></a>
                    <a href="https://stackoverflow.com/users/6018747/red" target="_blank"><i class="icon icon-stackoverflow"></i></a>
                </div>
                <div class="col-lg-6">
                    <Timeline />
                </div>
                <div class="col-lg-3 align-self-center text-center d-none d-lg-block">
                    <a href="mailto:richard@codeit.ninja" class="tb ff-monospace">richard@codeit.ninja</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import { codeit } from '../test';
    import Timeline from './partials/Timeline.svelte'
</script>