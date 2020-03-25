export default async (context) => {
  const { store, redirect, route } = context
  console.log('AUTH', {
    authenticated: store.state.authenticated,
    route,
    meta: route.meta,
    type: Array.isArray(route.meta),
    browser: process.browser
  })

  // If we are on the login page do nothing
  if (route.name === 'login') return

  // If the page is public allow passage
  if (route.meta && route.meta[0] && route.meta[0].isPublic === true) return

  // If the user is not authenticated
  if (store.state.user === null) {
    const param = route.fullPath.length === 1 ? '' : `?p=${route.fullPath}`
    return redirect(`/login${param}`)
  }

  // if user is loaded then refresh state
  await store.dispatch('LOAD_STATE')
}
