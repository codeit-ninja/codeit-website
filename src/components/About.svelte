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
                    <div class="codeit-tiles mb-5">
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-medal text-secondary fs-2 mb-3 d-block"></i>
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">8+ Years</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-medal text-secondary fs-2 mb-3 d-block"></i>
                            <strong class="d-block">Websites</strong>
                            <span class="d-block text-muted">40+</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-medal text-secondary fs-2 mb-3 d-block"></i>
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">5+ Years</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-medal text-secondary fs-2 mb-3 d-block"></i>
                            <strong class="d-block">Experience</strong>
                            <span class="d-block text-muted">5+ Years</span>
                        </div>
                    </div>
                    <div class="my-2">
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
                            <small>* Oh, in een muziekale bui maak ik ook muziek.</small>
                        </p>
                    </div>
                    <div class="mb-3">
                        <div class="d-flex align-items-center gap-4">
                            <div>
                                <button class="btn btn-player btn-play btn-lg" on:click={toggle}>
                                    <i class="bi" class:bi-play-circle={!isPlaying} class:bi-pause-circle={isPlaying}></i>
                                </button>
                            </div>
                            <div class="flex-grow-1">
                                <div id="waveform"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import CodeItNinjaVector from '../assets/about-me-2.svg';
    import MyAmazingSong from '../assets/my-song.ogg';

    import gsap from "gsap";
    import { whenInViewPort } from "../lib/_viewport";
    import { onMount } from "svelte";
    import WaveSurfer from 'wavesurfer.js';
    import cursor from 'wavesurfer.js/src/plugin/cursor';
    import { getCssVariable } from '../composables/_core';

    let wavesurfer: WaveSurfer;
    let isPlaying = false;

    const toggle = () => {
        console.log(wavesurfer.isPlaying());
        if( wavesurfer.isPlaying() ) {
            isPlaying = false;
            wavesurfer.pause();
        }
        else {
            wavesurfer.play();
            isPlaying = true;
        }
    }

    onMount( async () => {
        const linGrad = document.createElement('canvas').getContext('2d').createLinearGradient(0, 0, 300, 200);
        linGrad.addColorStop(0, '#ee7752'); 
        linGrad.addColorStop(1, '#e73c7e');

        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            barWidth: 2,
            barGap: 2,
            barRadius: 2,
            responsive: true,
            waveColor: getCssVariable('--bs-primary'),
            progressColor: linGrad,
            cursorColor: getCssVariable('--bs-secondary'),
            height: 80,
            cursorWidth: 0,
            plugins: [
                cursor.create({
                    showTime: true,
                    opacity: '1',
                    customShowTimeStyle: {
                        backgroundColor: getCssVariable('--bs-dark'),
                        color: '#fff',
                        padding: '3px 7px',
                        fontSize: '.7rem',
                    },
                    width: '0'
                })
            ]
        });
        wavesurfer.load(MyAmazingSong);

        whenInViewPort('#about .codeit-tiles', () => {
            gsap.fromTo('#about .codeit-tiles-tile', 
                {
                    opacity: 0,
                    transform: 'scale(0)'
                },
                {
                    opacity: 1,
                    transform: 'scale(1)',
                    duration: .3,
                    stagger: .1
                }
            )
        })
    })
</script>
<style scoped>
    #waveform {
        overflow: hidden;
        cursor: pointer;
    }
</style>