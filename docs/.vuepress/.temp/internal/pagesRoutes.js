import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-744e6dd4","/web/","前端",["/web/index.html","/00.目录页/00.前端.html","/00.%E7%9B%AE%E5%BD%95%E9%A1%B5/00.%E5%89%8D%E7%AB%AF.html","/00.目录页/00.前端.md","/00.%E7%9B%AE%E5%BD%95%E9%A1%B5/00.%E5%89%8D%E7%AB%AF.md"]],
  ["v-56350ffa","/01.%E5%85%B3%E4%BA%8E%E6%88%91/01.%E5%85%B3%E4%BA%8E%E6%88%91.html","页面的标题",["/01.关于我/01.关于我.html","/01.%E5%85%B3%E4%BA%8E%E6%88%91/01.%E5%85%B3%E4%BA%8E%E6%88%91","/01.关于我/01.关于我.md","/01.%E5%85%B3%E4%BA%8E%E6%88%91/01.%E5%85%B3%E4%BA%8E%E6%88%91.md"]],
  ["v-49046db1","/guide/backend.html","backend",["/guide/backend","/guide/backend.md"]],
  ["v-5efb549b","/guide/frontend.html","frontend",["/guide/frontend","/guide/frontend.md"]],
  ["v-fffb8e28","/guide/","guid",["/guide/index.html","/guide/README.md"]],
  ["v-4be355f8","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/01.%E7%AB%A0%E8%8A%821/01.js1.html","",["/《JavaScript教程》专栏/01.章节1/01.js1.html","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/01.%E7%AB%A0%E8%8A%821/01.js1","/《JavaScript教程》专栏/01.章节1/01.js1.md","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/01.%E7%AB%A0%E8%8A%821/01.js1.md"]],
  ["v-4879a4ba","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/01.%E7%AB%A0%E8%8A%821/01.js2.html","",["/《JavaScript教程》专栏/01.章节1/01.js2.html","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/01.%E7%AB%A0%E8%8A%821/01.js2","/《JavaScript教程》专栏/01.章节1/01.js2.md","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/01.%E7%AB%A0%E8%8A%821/01.js2.md"]],
  ["v-cf5c9554","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/02.%E7%AB%A0%E8%8A%822/01.jsa.html","",["/《JavaScript教程》专栏/02.章节2/01.jsa.html","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/02.%E7%AB%A0%E8%8A%822/01.jsa","/《JavaScript教程》专栏/02.章节2/01.jsa.md","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/02.%E7%AB%A0%E8%8A%822/01.jsa.md"]],
  ["v-537e55ec","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/02.%E7%AB%A0%E8%8A%822/02.%E5%B0%8F%E8%8A%82/01.jsxx.html","",["/《JavaScript教程》专栏/02.章节2/02.小节/01.jsxx.html","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/02.%E7%AB%A0%E8%8A%822/02.%E5%B0%8F%E8%8A%82/01.jsxx","/《JavaScript教程》专栏/02.章节2/02.小节/01.jsxx.md","/%E3%80%8AJavaScript%E6%95%99%E7%A8%8B%E3%80%8B%E4%B8%93%E6%A0%8F/02.%E7%AB%A0%E8%8A%822/02.%E5%B0%8F%E8%8A%82/01.jsxx.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
