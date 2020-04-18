export default (context) => {
  const { route, redirect, store } = context
  if (route.path === '/') {
    if (store.state.selectedTeam) redirect(`/teams/${store.state.selectedTeam}`)
    else redirect('/teams')
  }
}
