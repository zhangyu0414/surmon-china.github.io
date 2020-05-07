
// TODO: !!!
export const APP = {
  title: `Surmon's projects`,
  description: `Surmon's github repository pages.`,
  keywords: ['surmon-china', 'vue components example', 'vue swiper example', 'vue text editor']
}

export default {
  head: {
    title: 'GitHub',
    titleTemplate: `%s | ${APP.title}`,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { 'http-equiv': 'x-dns-prefetch-control', content: 'on' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: APP.keywords.join(',') },
      { hid: 'description', name: 'description', content: APP.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
