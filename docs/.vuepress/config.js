module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },
  lang: 'zh-CN',
  head: [
    [
      'link', 
      { 
        rel: 'icon', href: '/images/logo.png' }
      ]
  ],
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      { text: 'Home', link: '/'},
      { text: 'Guide', link: '/guide'},
      { text: 'About me', link: 'https://www.fengwenyi.com'},
    ],
    sidebar: {
      '/guide/': [
        '',
        'frontend',
        'backend'
      ]
    },
    repo: 'https://gitlab.com/foo/bar',
  
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
}