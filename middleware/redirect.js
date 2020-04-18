export default (context) => {
  const { route, redirect, store } = context
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
    console.log('REDIRECT (A):', route.path, route.name, req.url, store.state.selectedTeam)
  } else {
    const { from } = context
    console.log('REDIRECT (B):', route.path, route.name, from, store.state.selectedTeam)
  }
  if (route.path === '/') {
    if (store.state.selectedTeam) redirect(`/teams/${store.state.selectedTeam}`)
    else redirect('/teams')
  }
}
