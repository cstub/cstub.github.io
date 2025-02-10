/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Christoph Stumpf',
  author: 'Christoph Stumpf',
  headerTitle: 'Christoph Stumpf',
  description: 'The home of Christoph Stumpf',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://cstub.github.io',
  siteRepo: 'https://github.com/cstub/cstub.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  github: 'https://github.com/cstub',
  x: 'https://x.com/c_stub',
  linkedin: 'https://www.linkedin.com/in/cstub',
  locale: 'en-US',
  stickyNav: false,
  analytics: {
  },
  newsletter: {
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {      
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', 
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
