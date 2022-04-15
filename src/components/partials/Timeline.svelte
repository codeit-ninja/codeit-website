<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        function scene1() {
            const timelineItems = document.querySelectorAll('.codeit-timeline-item');
            const animDurations = {
                line: .2,
                dot: .05,
                date: .3,
                title: 2,
                body: .3,
                delay: 0
            }

            for(let i = timelineItems.length - 1;i >= 0;i--) {
                gsap.fromTo(timelineItems[i].querySelector('.codeit-timeline-seperator-line'), 
                    {
                        height: 0
                    },
                    {
                        height: '93%',
                        duration: animDurations.line / 1.5,
                        delay: animDurations.delay
                    }
                ),
                gsap.fromTo(timelineItems[i].querySelector('.codeit-timeline-seperator-dot'), 
                    {
                        transform: 'scale(0)'
                    },
                    {
                        transform: 'scale(1)',
                        duration: animDurations.dot,
                        delay: animDurations.delay + animDurations.line / 1.5 + .05
                    }
                )
                gsap.fromTo(timelineItems[i].querySelector('.codeit-timeline-date'), 
                    {
                        transform: 'translateX(-100px)',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0)',
                        opacity: 1,
                        duration: animDurations.date,
                        delay: animDurations.delay + animDurations.line / 1.5 + animDurations.dot
                    }
                )
                gsap.fromTo(timelineItems[i].querySelectorAll('.codeit-timeline-body'), 
                    {
                        transform: 'translateX(200px)',
                        transformOrigin: 'left',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0)',
                        opacity: 1,
                        duration: animDurations.body,
                        delay: animDurations.delay + animDurations.line / 1.5 + animDurations.dot,
                    }
                )
                gsap.fromTo(timelineItems[i].querySelectorAll('.codeit-badges li'), 
                    {
                        transform: 'scale(0)'
                    },
                    {
                        transform: 'scale(1)',
                        duration: .05,
                        stagger: .05,
                        delay: animDurations.delay + animDurations.line / 1.5 + animDurations.dot + animDurations.date,
                    }
                )
                
                animDurations.delay = animDurations.delay + animDurations.line / 1.5 + animDurations.dot;
            }
        }

        scene1()
    })
</script>

<div class="codeit-timeline">
    <div class="codeit-timeline-item">
        <div class="codeit-timeline-item-left-side">
            <span class="codeit-timeline-date">2022 - heden</span>
            
            <div class="codeit-timeline-seperator-line"></div>
            <div class="codeit-timeline-seperator-dot"></div>
        </div>
        <div class="codeit-timeline-item-right-side">
            <div class="codeit-timeline-body">
                <strong class="codeit-timeline-title">Code IT</strong>
                <p class="mb-0">
                    Begonnen als freelancer, uiteindelijk dan toch echt het toppunt van een nerd behaald.
                </p>
                <ul class="codeit-badges mt-3 mb-5">
                    <li>Vue</li>
                    <li>WordPress</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                    <li>AdonisJS</li>
                    <li>PHP</li>
                    <li>Electron</li>
                    <li>SCSS</li>
                    <li>Amazon AWS</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <div class="codeit-timeline-item-left-side">
            <span class="codeit-timeline-date">2017 - 2021</span>
            
            <div class="codeit-timeline-seperator-line"></div>
            <div class="codeit-timeline-seperator-dot"></div>
        </div>
        <div class="codeit-timeline-item-right-side">
            <div class="codeit-timeline-body">
                <strong class="codeit-timeline-title">Infocaster/Prodes</strong>
                <p class="mb-0">
                    Begonnen als Vue front-end developer. Later overgegaan tot fullstack
                    omdat ik zowel front als backend erg leuk vindt.
                    Heb hier mee mogen werken aan geweldige applicaties voor
                    grote klanten.
                </p>
                <ul class="codeit-badges mt-3 mb-5">
                    <li>Vue</li>
                    <li>WordPress</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                    <li>SCSS</li>
                    <li>PHP</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <div class="codeit-timeline-item-left-side">
            <span class="codeit-timeline-date">2014 - 2017</span>
            
            <div class="codeit-timeline-seperator-line"></div>
            <div class="codeit-timeline-seperator-dot"></div>
        </div>
        <div class="codeit-timeline-item-right-side">
            <div class="codeit-timeline-body">
                <strong class="codeit-timeline-title">Solvisoft</strong>
                <p class="mb-0">
                    Heb hier gewerkt als front-end developer. Omdat ik ervaring had
                    met AngularJS werdt mij de opdracht gegeven om hun complete CMS 
                    dynamisch te maken met AngularJS. Ik was verantwoordelijk voor
                    zowel het bouwen van de front-end als de standaard
                    m.b.t. AngularJS.
                </p>
                <ul class="codeit-badges mt-3 mb-5">
                    <li>JavaScript</li>
                    <li>AngularJS</li>
                    <li>Bootstrap</li>
                    <li>LESS</li>
                    <li>C#</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <div class="codeit-timeline-item-left-side">
            <span class="codeit-timeline-date">2012 - 2014</span>
            
            <div class="codeit-timeline-seperator-line"></div>
            <div class="codeit-timeline-seperator-dot"></div>
        </div>
        <div class="codeit-timeline-item-right-side">
            <div class="codeit-timeline-body">
                <strong class="codeit-timeline-title">Storm Online</strong>
                <p class="mb-0">
                    Mijn eerste fulltime baan. Aangenomen als fullstack ontwikkelaar.
                    Was verantwoordelijk voor alle websites, zowel front als back-end.
                    Ik maakte custom thema's en plugins voor WordPress.
                </p>
                <ul class="codeit-badges mt-3 mb-5">
                    <li>WordPress</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>SCSS</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <div class="codeit-timeline-item-left-side">
            <span class="codeit-timeline-date">2009 - 2012</span>
            
            <div class="codeit-timeline-seperator-line"></div>
            <div class="codeit-timeline-seperator-dot"></div>
        </div>
        <div class="codeit-timeline-item-right-side">
            <div class="codeit-timeline-body">
                <strong class="codeit-timeline-title">Op pad om een nerd te worden</strong>
                <p class="mb-0">Op 13 jarige leeftijd schreef ik mijn eerste code. Hiermee begon ook het leven als nerd.</p>
                <ul class="codeit-badges mt-3 mb-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                </ul>
            </div>
        </div>
    </div>
</div>
