import { writable } from 'svelte/store';
import { slugify } from 'underscore.string'

export type page = {
    name: string;
    icon: string;
    slug?: string;
    template: any;
}

function createPages() {
    const { subscribe, update } = writable<page[]>([]);

    return {
		subscribe,
		add: async (page: page) => {
            update(store => [...store, page])
        }
	}
}

export const pages = createPages();