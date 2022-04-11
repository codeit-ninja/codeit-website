
import type { Writable } from 'svelte/store';

import { writable } from "svelte/store";
import { slugify } from "underscore.string";

type route = {
    name: string;
    icon: string;
    component: () => Promise<{ default: any }>

    slug?: string;
    active?: boolean;
    mounted?: boolean;
}

/**
 * Create a router
 * 
 * @returns {Writable}
 */
function createRouter() {
    const { subscribe, update, set } = writable<route[]>([]);

    return {
		subscribe,
        set,
		add: (route: route) => {
            if( ! route.slug ) route.slug = slugify(route.name);
            if( ! route.active ) route.active = false;

            update(store => [...store, route])
        },
        init: (routes: route[]) => {
            routes.forEach(async route => {
                if( ! route.slug ) route.slug = slugify(route.name);
                if( ! route.active ) route.active = false;
                if( ! route.mounted ) route.mounted = false;
            });

            set(routes)
        },
	}
}

export const router = createRouter();