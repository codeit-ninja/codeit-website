export const routes = [
    {
        icon: 'bi bi-clock-history',
        name: 'Welcome',
        component: async () => import('./components/Welcome.svelte')
    },
    {
        icon: 'bi bi-person',
        name: 'About',
        component: async () => import('./components/About.svelte')
    },
    {
        icon: 'bi bi-list-check',
        name: 'Experience',
        component: async () => import('./components/Experience.svelte')
    },
    {
        icon: 'bi bi-archive',
        name: 'Portfolio',
        component: async () => import('./components/Portfolio.svelte')
    },
    {
        icon: 'bi bi-envelope',
        name: 'Contact',
        component: async () => import('./components/Contact.svelte')
    }
];