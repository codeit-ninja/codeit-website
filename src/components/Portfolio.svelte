<script lang="ts">
    import gsap from "gsap";
    import { whenInViewPort } from "../lib/_viewport";
    import { onMount } from "svelte";
    
    onMount( async () => {
        whenInViewPort(document.getElementById('portfolio'), () => {
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
        })
            
    })
</script>

<div class="codeit-section mt-5" id="portfolio">
    <div class="codeit-section-container container">
        <header class="codeit-section-header mt-auto">
            <span>Om over op te scheppen</span>
            <h1>Portfolio</h1>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="grid" style="--bs-gap: 1rem;">
                <div class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column">
                    <div class="portfolio-item-header">
                        <a href="https://github.com/codeit-ninja/codeit-website" target="_blank" class="float-end">
                            <i class="bi bi-github"></i>
                        </a>
                        <br class="clear" />
                        <i class="icon icon-project" />
                        <h5>Code IT Ninja - Portfolio website</h5>
                    </div>
                    <div class="portfolio-item-body">
                        <p>
                            Portfolio website voor mijzelf, zodat jullie mij beter leren kennen.
                        </p>
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>Svelte</li>
                            <li>NodeJS</li>
                            <li>AWS</li>
                            <li>TypeScript</li>
                            <li>gsap</li>
                        </ul>
                    </div>
                </div>
                <div class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column">
                    <div class="portfolio-item-header">
                        <a href="https://intranet.facto-geo.nl" target="_blank" class="float-end">
                            <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                        <br class="clear" />
                        <i class="icon icon-project" />
                        <h5>Intranet met Office 365 en WordPress integratie</h5>
                    </div>
                    <div class="portfolio-item-body">
                        <p>
                            Intranet ontwikkeld voor grote organisatie uit Deventer.
                            <b class="fw-normal">De wens was om Office 365 in WordPress te integreren</b>. Ik
                            heb dit samen met Prodes uit Arnhem ontwikkeld. Ik heb
                            zowel de front-end als back-end ontwikkeld.
                        </p>
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
                        <a href="https://newyorkpizzajobs.com/vacatures/" target="_blank" class="float-end">
                            <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>Vacatures filteren op basis van postcode</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een zoekfunctionaliteit ontwikkeld voor een grote pizzeria's
                        werkenbij website, zodat potentiële nieuwe werknemers
                        kunnen <b class="fw-normal">zoeken op actuele vacatures in de buurt</b>.
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
                        <a href="https://rooster.hoorhetwoord.nl" target="_blank" class="float-end">
                            <i class="bi bi-box-arrow-up-right"></i>
                        </a>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>Roostertool</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een applicatie ontwikkeld waarin <b class="fw-normal">leerkrachten
                        roosters maken voor hun leerlingen</b>. Dit rooster kan
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
                <div class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column">
                    <div class="portfolio-item-header">
                        <a href="https://github.com/codeit-ninja/apibay" target="_blank" class="float-end">
                            <i class="bi bi-github"></i>
                        </a>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>Thepiratebay.org API</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een API wrapper package voor de officiële <b class="fw-normal">TPB API</b>.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>NodeJS</li>
                            <li>TypeScript</li>
                            <li>apibay.org</li>
                        </ul>
                    </div>
                </div>
                <div class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column">
                    <div class="portfolio-item-header">
                        <a href="https://github.com/codeit-ninja/eztv-crawler" target="_blank" class="float-end">
                            <i class="bi bi-github"></i>
                        </a>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>EZTV.wf API</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een web <b class="fw-normal">crawler en API</b> NodeJS package voor EZTV.wf
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>NodeJS</li>
                            <li>TypeScript</li>
                            <li>eztv.wf</li>
                        </ul>
                    </div>
                </div>
                <div class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column">
                    <div class="portfolio-item-header">
                        <a href="https://github.com/codeit-ninja/yts-api-node" target="_blank" class="float-end">
                            <i class="bi bi-github"></i>
                        </a>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>YTS.ag API</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een <b class="fw-normal">API</b> wrapper om te communiceren met de API van Yify Torrents Solutions.
                    </div>
                    <div class="portfolio-item-footer mt-auto">
                        <ul class="codeit-badges codeit-badges-reversed mt-4">
                            <li>NodeJS</li>
                            <li>TypeScript</li>
                            <li>yts.ag</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column"
                >
                    <div class="portfolio-item-header">
                        <i class="bi bi-incognito float-end" title="Top secret"></i>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>Een VOD alternatief voor ons thuis</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Video on Demand, onze eigen <b class="fw-normal">streaming service</b>, maar dan gratis.
                        <br/>
                        <small style="font-size: .6rem;">*Maar ook wel een beetje illegaal</small>
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
                <div class="g-col-12 g-col-md-6 g-col-lg-4 portfolio-item d-flex flex-column">
                    <div class="portfolio-item-header">
                        <i class="bi bi-incognito float-end" title="Top secret"></i>
                        <br/>
                        <i class="icon icon-project" />
                        <h5>API koppling voor energieleverancier</h5>
                    </div>
                    <div class="portfolio-item-body">
                        Een WordPress plugin ontwikkeld voor de
                        dochterondernemingen van grote nederlandse energieleverancier om te <b class="fw-normal">koppelen met
                        interne vacature systemen</b>.
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
        </div>
    </div>
</div>
