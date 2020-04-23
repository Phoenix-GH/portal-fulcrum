import { COOKIE_NAME } from '../utils'
export default async ({ store, redirect, route, app }) => {
  // Check cookie to see if the user has already logged in
  const cookie = app.$cookies.get(COOKIE_NAME)
  console.log('AUTH M', cookie)
  // If the user is not authenticated
  if (cookie === undefined) {
    await store.dispatch('GENERATE_SESSION')
  } else {
    await store.dispatch('REFRESH_SESSION', cookie)
  }

  if (store.state.user && !Array.isArray(store.state.user)) {
    if (route.name === 'login') return redirect('/')
    // if this is an invitation and the user is authenticated go to profile page
    if (route.path === '/invite' || route.path === '/team/invite-accept') return redirect('/profile')
    return // continue to page we are trying to load
  }

  if (route.path === '/invite' || route.path === '/team/invite-accept') {
    redirect(302, '/login', { type: 'invite', code: route.query.code })
  }
  // If we are on the login page do nothing
  if (route.name === 'login') return

  // If the page is public allow passage
  // TODO redo this logic with reduce
  if (route.meta && route.meta[0] && route.meta[0].isPublic === true) return

  const param = route.fullPath.length === 1 || route.fullPath === '/logout' ? '' : `?p=${route.fullPath}`
  return redirect(`/login${param}`)

  // if user is loaded then refresh state
  // await store.dispatch('LOAD_STATE')
}
