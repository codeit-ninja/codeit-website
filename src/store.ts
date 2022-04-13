import { writable } from "svelte/store";

export const contact = writable({
    name: '',
    email: '',
    message: ''
});