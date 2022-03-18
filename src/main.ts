import App from './App.svelte';
import { useRouter } from './lib/_router';
import { routes } from './router';

import './scss/codeit.scss';

useRouter(routes);

const app = new App({
  target: document.getElementById('app'),
  intro: true
})

export default app
