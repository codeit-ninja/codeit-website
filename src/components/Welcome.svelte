<div class="codeit-section vh-100" id="welcome">
    <div class="codeit-section-container container h-100">
        <header class="codeit-section-header mt-auto">
            <span class="text-white">Hello, I'm</span>
            <h1>{codeit.owner}</h1>
            <span>I write code</span>
            <div class="codeit-section-header-buttons">
                <button class="btn btn-lg btn-outline-secondary">Download CV</button>
                <button class="btn btn-lg btn-secondary">Contact me</button>
            </div>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="row">
                <div class="col-3 align-self-center text-center"></div>
                <div class="col-6">
                    <img class="img-fluid" src={CodeItNinja} alt="Code IT" />
                </div>
                <div class="col-3 align-self-center text-center">
                    <span class="tb text-secondary">Scroll down</span>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import CodeItNinja from '../assets/jeroen.png';
    import { codeit } from '../test';
</script>