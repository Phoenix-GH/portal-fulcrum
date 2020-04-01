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
    console.log('Making xhr request to ' + config.url)
    // TODO: update this logic
    if (app.$state.sessionKey && config.data && config.data.auth_id === undefined) {
      console.log('BEFORE >', config.data)
      config.data = Object.assign({}, config.data, { auth_id: app.$state.sessionKey.auth_id })
      console.log('UPDATE < ', config.data)
    }
  })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
