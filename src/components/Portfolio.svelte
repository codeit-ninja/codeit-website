<script lang="ts">
    import gsap from "gsap";
    import { isInViewport } from "../lib/_viewport";
    import { onMount } from "svelte";
    
    onMount( async () => {
        if(await isInViewport(document.getElementById('portfolio'))) {
            gsap.fromTo('.portfolio-item', 
                {
                    opacity: 0,
                    transform: 'translateY(20px)'
                },
                {
                    opacity: 1,
                    transform: 'translateY(0)',
                    duration: 1,
                    stagger: .1
                }
            )
        }
    })
</script>

<div class="codeit-section mt-5" id="portfolio">
    <div class="codeit-section-container container">
        <header class="codeit-section-header mt-auto">
            <span>Things I made</span>
            <h1>Portfolio</h1>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="grid" style="--bs-gap: 1rem;">
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="icon icon-project" />
                        <h5>Intranet met Office 365 en WordPress integratie</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Intranet ontwikkeld voor grote organisatie uit Deventer.
                        De wens was om Office 365 in WordPress te integreren. Ik
                        heb dit samen met Prodes uit Arnhem ontwikkeld. Ik heb
                        zowel de front-end als back-end ontwikkeld.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>WordPress</li>
                            <li>PHP</li>
                            <li>Angular</li>
                            <li>Office 365</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="icon icon-project" />
                        <h5>Vacatures filteren op basis van postcode</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een zoekfunctionaliteit ontwikkeld voor New York Pizza's
                        werkenbij website, zodat potentiële nieuwe werknemers
                        kunnen zoeken op actuele vacatures in de buurt.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>WordPress</li>
                            <li>PHP</li>
                            <li>Web Components</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="icon icon-project" />
                        <h5>Royaljongbloed - Hoor het Woord roostertool</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een applicatie ontwikkeld waarin leerkrachten een
                        rooster kunnen maken voor hun klas. Dit rooster kan
                        geëxporteerd worden als excel, CSV, of direct geprint
                        worden.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>NodeJS</li>
                            <li>TypeScript</li>
                            <li>Vue</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="icon icon-project" />
                        <h5>Thepiratebay.org API</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een API wrapper package voor de officiële TPB API.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="icon icon-project" />
                        <h5>Een VOD alternatief voor ons thuis</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Onze eigen Netflix/HBO/Disney... maar dan gratis.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>NodeJS</li>
                            <li>TypeScript</li>
                            <li>AdonisJS</li>
                            <li>Vue</li>
                            <li>WebTorrent</li>
                            <li>YTS.ag</li>
                            <li>eztv.wf</li>
                            <li>thepiratebay.org</li>
                            <li>opensubtitles.org</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="icon icon-project" />
                        <h5>API koppling voor Alliander</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een WordPress plugin ontwikkeld voor de
                        dochterondernemingen van Alliander om te koppelen met
                        interne vacature systemen.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>WordPress</li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 g-4">
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <img
                                class="img-fluid card-img-top"
                                src={RoostertoolImage}
                                alt="Roostertool"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Roostertool</h5>
                            <button class="btn btn-lg btn-outline-secondary">Bekijk case</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <img
                                class="img-fluid card-img-top"
                                src={RoostertoolImage}
                                alt="Roostertool"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Roostertool</h5>
                            <button class="btn btn-lg btn-outline-secondary">Bekijk case</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-img">
                            <img
                                class="img-fluid card-img-top"
                                src={RoostertoolImage}
                                alt="Roostertool"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Roostertool</h5>
                            <button class="btn btn-lg btn-outline-secondary">Bekijk case</button>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</div>
