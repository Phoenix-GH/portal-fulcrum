export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    sessionStorage.setItem('board', JSON.stringify(state))
  })
}
