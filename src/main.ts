import App from './App.svelte';
import { router } from './lib/_router';
import { routes } from './router';

import './scss/codeit.scss';

router.init(routes);

const app = new App({
  target: document.getElementById('app'),
  intro: true
})

export default app
