export default function({ $axios, redirect, store }) {
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
    console.log('Making request to ' + config.url)
    if (store.state.sessionKey) {
      config.data = Object.assign({}, config.data, { auth_id: store.state.sessionKey.auth_id })
    }
  })

  // $axios.onError(error => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code === 400) {
  //     redirect('/400')
  //   }
  // })
}
