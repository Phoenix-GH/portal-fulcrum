export function saveStatePlugin(store) {
  store.subscribe((mutation, state) => {
    sessionStorage.setItem('sessionKey', JSON.stringify(state))
  })
}
