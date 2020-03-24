export default function(context) {
  const { store, redirect, route } = context
  console.log('AUTH', { authenticated: store.state.authenticated, meta: route.meta, type: Array.isArray(route.meta) })
  // If we are on the login page do nothing
  if (route.name === 'login') return

  // If the page is public allow passage
  if (route.meta && route.meta[0].isPublic === true) return
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
