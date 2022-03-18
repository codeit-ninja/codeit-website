import { slugify } from "underscore.string";

type route = {
    name: string;
    icon: string;
    component: () => Promise<{ default: any }>

    slug?: string;
    active?: boolean;
    mounted?: boolean;
}

type routes = route[];

export const routes: routes = [];
export function useRouter(r: route[]) {
    r.forEach(route => {
        if( ! route.slug ) route.slug = slugify(route.name);

        routes.push(route)
    });
}