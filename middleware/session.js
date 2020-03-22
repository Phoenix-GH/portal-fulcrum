export default async function({ store, next }) {
  if (!process.server) {
    console.log('middleware from client side')
  }
  try {
    // eslint-disable-next-line no-console
    console.log('SESSION')
    // if (store.state.sessionKey === null)
    await store.dispatch('ADD_SESSION')
  } catch (err) {
    console.log('Session error')
    console.log(err)
  }
}
