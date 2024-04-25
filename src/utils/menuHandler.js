// 获取菜单路由
export const getMenuRoutes = () => {
  // 路由模块对象
  const pages = import.meta.glob('../views/MenuList/**/(*)Page.vue', {
    eager: true,
    import: 'default'
  })

  // 路由动态导入函数
  const components = import.meta.glob('../views/MenuList/**/(*)Page.vue')

  return Object.entries(pages).map(([path, options]) => {
    const routerPath = path.replace('../views/MenuList', '').replace('.vue', '')
    const routerName = routerPath.split('/').join('')

    return {
      path: routerPath,
      name: routerName,
      meta: options.meta,
      component: components[path]
    }
  })
}

// 生成侧边栏菜单
export const getMenuList = () => {

  const pageObj = import.meta.glob('../views/MenuList/**/(*)Page.vue', {
    eager: true,
    import: 'default'
  })
  const pageMap = Object.entries(pageObj)

  const menuObj = import.meta.glob('../views/MenuList/*/menu.js', {
    eager: true,
    import: 'default'
  })
  const menuMap = Object.entries(menuObj)


  let result = []

  menuMap.forEach(([menuPath, menuOptions]) => {
    const target = menuPath.replace('../views/MenuList/', '').replace('/menu.js', '')
    if (menuOptions.isSingle) {
      // 一级菜单就是页面
      pageMap.forEach(([pagePath, pageOptions]) => {
        if (pagePath.includes(target)) {
          result.push({
            path: pagePath.replace('../views/MenuList', '').replace('.vue', ''),
            title: menuOptions.title,
            order: menuOptions.order
          })
        }
      })
    } else {
      // 一级菜单无页面 有子页面
      let children = []
      pageMap.forEach(([pagePath, pageOptions]) => {
        if (pagePath.includes(target) && pageOptions.meta.isMenu) {
          children.push({
            path: pagePath.replace('../views/MenuList', '').replace('.vue', ''),
            title: pageOptions.meta.title,
            order: pageOptions.meta.order
          })
        }
      })

      result.push({
        title: menuOptions.title,
        children: children,
        order: menuOptions.order
      })

    }
  })

  result.sort((a, b) => {
    return a.order - b.order
  })

  result.forEach(item => {
    if (item.children) {
      item.children.sort((a, b) => {
        return a.order - b.order
      })
    }
  })

  return result
}
