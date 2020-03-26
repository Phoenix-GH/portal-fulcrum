import { clearState } from '../plugins/session'

export const state = () => ({
  authenticated: false,
  session: null,
  sessionKey: null,
  // sessionError: null,
  user: null,
  teams: [],
  invites: [],
  user_emails: []
})

export const mutations = {
  ADD_SESSION(state, session) {
    console.log('M::ADD_SESSION', session)
    state.session = session
  },
  // ADD_SESSION_ERROR(state, error) {
  //   console.log('M::ADD_SESSION_ERROR', error)
  //   state.sessionKey = error
  // },
  SET_STATE(state, source) {
    console.log('M::SET_STATE', source)
    state.user = source.user
    state.teams = source.teams
    state.invites = source.invites
    state.user_emails = source.user_emails
    state.authenticated = true
  },
  CLEAR_STATE(state, source) {
    console.log('M::CLEAR_STATE', source)
    state.user = null
    state.teams = null
    state.invites = null
    state.user_emails = null
    state.authenticated = false
  }
}

export const actions = {
  async LOAD_STATE({ state, commit }) {
    console.log('A::LOAD_STATE')
    const auth_id = this.$state.sessionKey.auth_id

    const {
      data: { response }
    } = await this.$axios.post('/auth/get', {
      auth_id
    })

    // console.log(data.response.auth.auth_id)

    // if (data.error_state === true) {
    //   console.log('error_state', data.error_state)
    //   commit(' ADD_SESSION_ERROR', data.errors)
    //   return
    // }
    commit('SET_STATE', response)
  }
}
