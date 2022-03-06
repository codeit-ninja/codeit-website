<div class="codeit-section mt-5" id="contact">
    <div class="codeit-section-container container">
        <header class="codeit-section-header mt-auto">
            <span>Get in touch</span>
            <h1>Contact</h1>
        </header>
        <div class="codeit-section-content mt-auto">
            <div class="row">
                <div class="col-3">
                    <div class="codeit-tiles flex-column gap-3">
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-envelope-o fs-4 text-secondary"></i>
                            <h5 class="mb-0 mt-3">Email</h5>
                            <span>richard@codeit.ninja</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-whatsapp fs-4 text-secondary"></i>
                            <h5 class="mb-0 mt-3">Whatsapp</h5>
                            <span>+31637409282</span>
                        </div>
                        <div class="codeit-tiles-tile text-center">
                            <i class="icon icon-linkedin2 fs-4 text-secondary"></i>
                            <h5 class="mb-0 mt-3">LinkedIn</h5>
                            <span>https://www.linkedin.com/</span>
                        </div>
                    </div>
                </div>
                <div class="col-7 offset-1">
                    {#if emailSend}
                        <div class="alert alert-success" role="alert">
                            Thanks for your message, I get back to you shortly.
                        </div>
                    {/if}
                    <form on:submit|preventDefault={submit}>
                        <div class="mb-4">
                            <input type="text" class="form-control form-control-lg" placeholder="Your full name" name="name" bind:value={$contact.name} required />
                        </div>
                        <div class="mb-4">
                            <input type="email" class="form-control form-control-lg" placeholder="Your email" name="email" bind:value={$contact.email} required />
                        </div>
                        <div class="mb-4">
                            <textarea class="form-control form-control-lg" placeholder="Your message" name="message" bind:value={$contact.message} required></textarea>
                        </div>
                        <div class="mb-4">
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
    let emailSend = false;

    const submit = async () => {
        isSending = true;

        try {
            await emailsjs.send('service_wpss08d', 'template_alo23mc', $contact, 'MaJjKVhtQTklMkq1N');

            emailSend = true;
        }
        catch(error) {}
        finally {
            isSending = false;
        }
    }
</script>