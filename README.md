# MetaPop初始化时引用的库
 - Nextjs(Layout, Guard, _app, _document, public)
 - typescript
 - tailwind(样式框架)
 - daisyui(配合tailwind的主题样式)  → flowbite
 - lingui(i18n)
 - redux/@reduxjs/toolkit
 - redux-persist(redux持久化配置)
 - babel
 - eslint(js验证和格式化)
 - prettier(还未验证是否已经生效)
 - cross-env(读取env文件)

# 需要编写的例子
 - 如何使用Guard
 - 引用services(配合axios做header的认证)
 - 目录结构说明
 - commitlint
 - husky
 - 如何切换多语言

# 切换多语言
 - const { locale, locales, asPath, push } = useRouter()
 - push(asPath, undefined, { locale: l })

# 文件目录说明
- components 公用组件
- config 配置文件
- constants 合约相关
- features 每个 pages 对应的组件
- functions 工具函数
- guards 只有一个网络守卫
- hooks react hooks
- layouts 布局类
- pages 页面
- services 一些网络服务
- state redux
- styles 样式
- types typescript定义

# 其他
 - UI- https://flowbite.com/
 - CSS框架- https://tailwindcss.com/
 - UI小组件- https://headlessui.dev/
 - ICON- https://heroicons.com/
 - http请求-https://swr.vercel.app/zh-CN

