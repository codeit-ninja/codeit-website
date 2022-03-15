<script lang="ts">
    import gsap, { SteppedEase } from "gsap";
    import { TextPlugin } from "gsap/TextPlugin";
    import { onMount } from "svelte";

    gsap.registerPlugin(TextPlugin)

    onMount(() => {
        function scene1() {
            const timelineItems = document.querySelectorAll('.codeit-timeline-item');
            const animDurations = {
                line: .7,
                dot: .05,
                date: .5,
                title: 2,
                body: .5,
                delay: 0
            }

            for(let i = timelineItems.length - 1;i >= 0;i--) {
                gsap.fromTo(timelineItems[i].querySelector('.codeit-timeline-seperator-line'), 
                    {
                        height: 0
                    },
                    {
                        height: '93%',
                        duration: animDurations.line / 3,
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
                        delay: animDurations.delay + animDurations.line / 3 + .05
                    }
                )
                gsap.fromTo(timelineItems[i].querySelector('.codeit-timeline-date'), 
                    {
                        transform: 'rotateY(90deg)'
                    },
                    {
                        transform: 'rotateY(0deg)',
                        duration: animDurations.date,
                        delay: animDurations.delay + animDurations.line / 3 + animDurations.dot
                    }
                )
                gsap.fromTo(timelineItems[i].querySelectorAll('.codeit-timeline-body'), 
                    {
                        transform: 'translateX(100px)',
                        transformOrigin: 'left',
                        opacity: 0
                    },
                    {
                        transform: 'translateX(0)',
                        opacity: 1,
                        duration: animDurations.body,
                        delay: animDurations.delay + animDurations.line / 3 + animDurations.dot,
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
                        delay: animDurations.delay + animDurations.line / 3 + animDurations.dot + animDurations.body,
                    }
                )
                
                animDurations.delay += animDurations.line;
            }

            //return tl;
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
                    Started as freelancer
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
                    Started as Vue front-end developer. But found out I rather
                    wanted to stay fullstack. Moved to another group inside the
                    company, which was later baptized to prodes. Created amazing
                    applications for great customers.
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
                    Helped them engineer their entire CMS to be dynamic using
                    AngularJS. We seperated back-end from front-end by creating API
                    endpoints. I was responsible for the AngularJS implementation.
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
                    Was the only front-end developer. Was responsible for all
                    WordPress websites. I designed and created custom themes, and
                    plugins.
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
            <span class="codeit-timeline-date">2014 - 2017</span>
            
            <div class="codeit-timeline-seperator-line"></div>
            <div class="codeit-timeline-seperator-dot"></div>
        </div>
        <div class="codeit-timeline-item-right-side">
            <div class="codeit-timeline-body">
                <strong class="codeit-timeline-title">Code IT</strong>
                <p class="mb-0">At the age of 13 I started to write my first code</p>
                <ul class="codeit-badges mt-3 mb-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div class="codeit-timeline-item">
        <span class="codeit-timeline-date">2017 - 2020</span>
        <div class="codeit-timeline-body">
            <span class="codeit-timeline-title">Infocaster/Prodes</span>
            <p>
                Started as Vue front-end developer. But found out I rather
                wanted to stay fullstack. Moved to another group inside the
                company, which was later baptized to prodes. Created amazing
                applications for great customers.
            </p>
            <ul>
                <li>Vue</li>
                <li>WordPress</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SCSS</li>
                <li>PHP</li>
            </ul>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <span class="codeit-timeline-date">2014 - 2017</span>
        <div class="codeit-timeline-body">
            <span class="codeit-timeline-title">Solvisoft</span>
            <p>
                Helped them engineer their entire CMS to be dynamic using
                AngularJS. We seperated back-end from front-end by creating API
                endpoints. I was responsible for the AngularJS implementation.
            </p>
            <ul>
                <li>JavaScript</li>
                <li>AngularJS</li>
                <li>Bootstrap</li>
                <li>LESS</li>
                <li>C#</li>
            </ul>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <span class="codeit-timeline-date">2010 - 2014</span>
        <div class="codeit-timeline-body">
            <span class="codeit-timeline-title">Storm Online</span>
            <p>
                Was the only front-end developer. Was responsible for all
                WordPress websites. I designed and created custom themes, and
                plugins.
            </p>
            <ul>
                <li>WordPress</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>SCSS</li>
            </ul>
        </div>
    </div>
    <div class="codeit-timeline-item">
        <span class="codeit-timeline-date">2009</span>
        <div class="codeit-timeline-body">
            <span class="codeit-timeline-title">Started programming</span>
            <p class="mb-0">
                At the age of 13 I started to write my first code
            </p>
        </div>
    </div> -->
</div>
