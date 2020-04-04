export default ({ route, store }) => {
  store.commit('SET_META', route.meta)
}
