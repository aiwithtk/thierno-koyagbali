import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Mirrors t3.gg: ClientRouter view transitions + aggressive link prefetching.
export default defineConfig({
  integrations: [react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
