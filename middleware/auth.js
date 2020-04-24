import { getClientIp } from 'request-ip'
import { COOKIE_NAME } from '../utils'
export default async (context) => {
  const { store, redirect, route, app } = context
  let ipAddress
  if (process.server) {
    const { req } = context
    ipAddress = getClientIp(req)
  }
  // Check cookie to see if the user has already logged in
  const cookie = app.$cookies.get(COOKIE_NAME)

  console.log('AUTH M', route.path, { ipAddress, cookie })
  // If the user is not authenticated
  if (cookie === undefined) {
    await store.dispatch('GENERATE_SESSION', { ipAddress })
  } else {
    await store.dispatch('REFRESH_SESSION', { ipAddress, cookie })
  }

  if (store.state.user && !Array.isArray(store.state.user)) {
    // console.log(' -- authenticated')
    if (route.path === '/login') return redirect('/')
    // if this is an invitation and the user is authenticated go to profile page
    if (route.path === '/invite' || route.path === '/team/invite-accept') return redirect('/profile')
    return // continue to page we are trying to load
  }

  if (route.path === '/invite' || route.path === '/team/invite-accept') {
    return redirect('/login', { type: 'invite', code: route.query.code })
  }
  // If we are on the login page do nothing
  if (route.path === '/login') return

  // If the page is public allow passage
  // TODO redo this logic with reduce
  if (route.meta && route.meta[0] && route.meta[0].isPublic === true) return

  const param = route.fullPath.length === 1 || route.fullPath === '/logout' ? '' : `?p=${route.fullPath}`
  return redirect(`/login${param}`)

  // if user is loaded then refresh state
  // await store.dispatch('LOAD_STATE')
}
