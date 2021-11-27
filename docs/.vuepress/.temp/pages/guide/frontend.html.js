export const data = {
  "key": "v-5efb549b",
  "path": "/guide/frontend.html",
  "title": "frontend",
  "lang": "en-US",
  "frontmatter": {
    "pageClass": "frontend-class"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/frontend.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
