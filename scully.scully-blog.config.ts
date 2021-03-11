import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-blog',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
      '/entries/:title': {
        type: 'json',
        defaultPostRenderers: ['dataFetch'],
        title: {
          url: 'http://demo7107977.mockable.io/content/blog/entries',
          property: 'title'
        }
      }
    },
  },
};
