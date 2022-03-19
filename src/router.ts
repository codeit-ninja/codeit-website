export const routes = [
    {
        icon: 'icon icon-menu-timeline',
        name: 'Welcome',
        component: async () => import('./components/Welcome.svelte')
    },
    {
        icon: 'icon icon-user',
        name: 'About',
        component: async () => import('./components/About.svelte')
    },
    {
        icon: 'icon icon-menu-skills',
        name: 'Experience',
        component: async () => import('./components/Experience.svelte')
    },
    {
        icon: 'icon icon-menu-portolio',
        name: 'Portfolio',
        component: async () => import('./components/Portfolio.svelte')
    },
    {
        icon: 'icon icon-menu-contact',
        name: 'Contact',
        component: async () => import('./components/Contact.svelte')
    }
];