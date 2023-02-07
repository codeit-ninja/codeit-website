<div class="codeit-section mt-5" id="contact">
    <div class="codeit-section-container container">
        <header class="codeit-section-header mt-auto">
            <span>In contact komen</span>
            <h1>Contact</h1>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="row">
                <div class="col-lg-3 mb-5 mb-lg-0">
                    <div class="codeit-tiles flex-lg-column gap-3">
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-envelope-o fs-4 text-secondary"></i>
                            <h5 class="mb-0 mt-3">Email</h5>
                            <a class="text-muted" href="mailto:richard@codeit.ninja" title="Send a mail">richard@codeit.ninja</a>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-whatsapp fs-4 text-secondary"></i>
                            <h5 class="mb-0 mt-3">Whatsapp</h5>
                            <a class="text-muted" href="https://wa.me/+31637409282" title="Send me a message on WhatsApp" target="_blank">+31637409282</a>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-linkedin2 fs-4 text-secondary"></i>
                            <h5 class="mb-0 mt-3">LinkedIn</h5>
                            <a class="text-muted" href="https://www.linkedin.com/in/richard-mauritz-53681b206/" title="Check out my linkedIn profile" target="_blank">Bezoek mij op LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 offset-lg-1">
                    {#if emailSend}
                        <div class="alert alert-success" role="alert">
                            <h5 class="text-dark mb-4">🎉🎉🎉</h5>
                            Bedankt voor je bericht {$contact.name}. Ik probeer zo snel mogelijk te reageren, meestal binnen 24 uur.
                        </div>
                    {/if}
                    {#if isError}
                        <div class="alert alert-danger" role="alert">
                            <h5 class="text-dark mb-4">🤔🤔🤔</h5>
                            {errorMessage}
                        </div>
                    {/if}
                    <form on:submit|preventDefault={submit}>
                        <div class="mb-4">
                            <input type="text" class="form-control form-control-lg w-100" placeholder="Voor en achternaam" name="name" bind:value={$contact.name} required />
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control form-control-lg w-100" placeholder="Op welk emailadres kan ik je bereiken?" name="email" bind:value={$contact.email} required />
                        </div>
                        <div class="mb-4">
                            <textarea class="form-control form-control-lg w-100" placeholder="Vertel wat leuks, stel een vraag of bied me koffie aan" name="message" bind:value={$contact.message} rows="5" required></textarea>
                        </div>
                        <div class="mb-4 d-flex align-items-center">
                            <span style="width: 150px;" class="fs-3">{puzzle.first} + {puzzle.second} = </span>
                            <input type="text" class="form-control form-control-lg flex-grow-1" placeholder="uitkomst" bind:value={$contact.puzzle} />
                        </div>
                        <div class="mb-4 d-flex">
                            
                            <button type="submit" class="btn btn-lg btn-secondary">
                                {#if isSending}
                                    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                {/if}
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    import emailsjs from '@emailjs/browser';
    import { contact } from '../store';

    let isSending = false;
    let isError = false;
    let errorMessage = '';
    let errorCount = 0;
    let emailSend = false;
    let puzzle = {
        first: Math.floor(Math.random() * (9 - 1 + 1) + 1),
        second: Math.floor(Math.random() * (9 - 1 + 1) + 1)
    }

    const submit = async () => {
        isSending = true;
        isError = false;

        if( parseInt($contact.puzzle) !== (puzzle.first + puzzle.second) ) {
            isSending = false;
            emailSend = false;
            isError = true;
            errorMessage = `De ingevulde uitkomst is fout, ${puzzle.first} + ${puzzle.second} = ${(puzzle.first + puzzle.second)} en geen ${$contact.puzzle}.`

            if( errorCount > 1 ) {
                errorMessage += ` Of je hebt niet goed opgelet op school 🧐, of je bent een robot en probeer je mijn mailbox te spammen 🤖.`
            }

            errorCount++;

            puzzle = {
                first: Math.floor(Math.random() * (9 - 1 + 1) + 0),
                second: Math.floor(Math.random() * (9 - 1 + 1) + 0)
            }

            return;
        }

        try {
            await emailsjs.send('service_wpss08d', 'template_alo23mc', $contact, 'MaJjKVhtQTklMkq1N');

            emailSend = true;
        }
        catch(error) {
            isError = true;
            errorMessage = error.message;
        }
        finally {
            isSending = false;
        }
    }
</script>