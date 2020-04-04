export default function({ $axios, redirect, store, app, $state }) {
  // Set baseURL (both client and server)
  $axios.setBaseURL(process.env.API_BASE_URL || 'http://api-v1.fulcrumsaas.net/api')

  // // Change URL only for client
  // if (process.client) {
  //   this.$axios.setBaseURL('http://api.example.com')
  // }

  // // Change URL only for server
  // if (process.server) {
  //   this.$axios.setBaseURL('http://api.example.com')
  $axios.onRequest((config) => {
    // don't mess with the auth/get call
    if (config.url === '/auth/get') return

    // all other calls we will attempt to append the auth_id automagically
    console.log('Making xhr request to ' + config.url, config.headers['x-source'])
    // TODO: update this logic
    if (store.state.session && store.state.session.auth_id && config.data.auth_id === undefined) {
      // console.log('BEFORE >', config.data)
      config.data = Object.assign({}, config.data, { auth_id: store.state.session.auth_id })
      // console.log('UPDATE < ', config.data)
    }
  })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
