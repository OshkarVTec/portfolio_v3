// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon()],
    site: 'https://oshkarvtec.github.io/portfolio_v3/',
    base: '/portfolio_v3/'
});
