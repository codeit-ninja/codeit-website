<div class="codeit-section mt-5" id="about">
    <div class="codeit-section-container container">
        <header class="codeit-section-header mt-auto">
            <span>Get to known</span>
            <h1>About me</h1>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="row">
                <div class="col-md-4 mb-5 mb-md-0">
                    <img class="img-fluid" src={CodeItNinjaVector} alt="Code IT" />
                </div>
                <div class="col-md-7 offset-lg-1">
                    <div class="codeit-tiles">
                        <div class="codeit-tiles-tile text-center">
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">5+ Years</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">5+ Years</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">5+ Years</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">5+ Years</span>
                        </div>
                    </div>
                    <div class="my-5">
                        <p>
                            Creatief, dat is wat mij kenmerkt. Op mijn 11e verjaardag kreeg ik mijn eerste computer. Sinds die dag is mijn
                            interesse in computers en alles wat daarbij komt kijken onstaan.
                        </p>
                        <p>
                            Op mijn 13e bouwde ik voor het eerst mijn eigen PC. Compleet met LED's, deze kocht je toen nog bij een bezine station,
                            officieel bedoeld voor in de auto maar die 12v connector kon prima op een van de 12v draadjes in de PC. Met behulp van
                            onze buurman bouwde ik er een heus plexiglas in zodat ik kon pronken met de binnenkant.
                        </p>
                        <p>
                            Op mijn 14e begon ik een nieuw avontuur, programmeren. Ik begon met een simpele 'What you see is what you get' editor.
                            Al gauw leerde ik HTML, CSS, jQuery en PHP. Op mijn 17e besloot ik hiervan mijn fulltime baan te maken.
                        </p>
                        <p>
                            <small>* Had ik al verteld dat ik ook mijn <a href="https://www.youtube.com/channel/UC-m0kQj6k4lA5g9KYgSlcZQ">eigen vuurwerk</a> maak voor oudjaar?</small>
                        </p>
                        <p>
                            <small>** Had ik ook al verteld dat ik in een muziekale bui innees talent heb voor het maken van muziek?</small>
                        </p>
                    </div>
                    <button class="btn btn-lg btn-secondary">Lets talk</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import CodeItNinjaVector from '../assets/about-me-2.svg';

    import gsap from "gsap";
    import { isInViewport } from "../lib/_viewport";
    import { onMount } from "svelte";
    
    onMount( async () => {
        if(await isInViewport(document.getElementById('about'))) {
            gsap.fromTo('#about .codeit-tiles-tile', 
                {
                    opacity: 0,
                    transform: 'scale(0)'
                },
                {
                    opacity: 1,
                    transform: 'scale(1)',
                    duration: .15,
                    stagger: .1
                }
            )
        }
    })
</script>