import { COOKIE_NAME } from '../utils'

export const state = () => ({
  authenticated: false,
  session: null,
  sessionKey: null,
  selectedTeam: null,
  // sessionError: null,
  user: null,
  teams: [],
  invites: [],
  emails: [],
  meta: null,
  invite: null,
  last: null
})

export const mutations = {
  ADD_SESSION(state, session) {
    console.log('  M::ADD_SESSION', session)
    state.session = session
    if (session['p.current_team']) this.state.selectedTeam = session['p.current_team']
    this.$cookies.set(COOKIE_NAME, session)
  },
  ADD_INVITE_KEY(state, code) {
    state.invite = code
  },
  // ADD_SESSION_ERROR(state, error) {
  //   console.log('  M::ADD_SESSION_ERROR', error)
  //   state.sessionKey = error
  // },
  SELECT_TEAM(state, source) {
    state.selectedTeam = source.selectedTeam
  },
  SET_STATE(state, source) {
    console.log('  M::SET_STATE', source)
    state.user = source.user
    state.teams = source.teams
    state.invites = source.invites
    state.emails = source.user_emails
    state.authenticated = true
  },
  CLEAR_STATE(state) {
    console.log('  M::CLEAR_STATE')
    this.$cookies.remove(COOKIE_NAME)
    state.selectedTeam = null
    state.user = null
    state.teams = []
    state.invites = []
    state.emails = []
    state.authenticated = false
  },
  SET_META(state, meta) {
    state.meta = meta
  }
}

export const actions = {
  async GENERATE_SESSION({ state, commit }, { ipAddress } = {}) {
    try {
      console.log('  A::GENERATE_SESSION')
      const headers = { 'X-Source': 'GENERATE_SESSION' }
      if (ipAddress) headers['X-Forwarded'] = ipAddress

      const {
        data: { response }
      } = await this.$axios.post('/auth/get', {}, { headers })

      commit('ADD_SESSION', response.auth)
    } catch (err) {
      // eslint-disable-next-line no-console
      if (err.response) console.error(err.response.status, err.response.data)
    }
  },
  async REFRESH_SESSION({ state, commit }, { ipAddress, cookie } = {}) {
    console.log('  A::REFRESH_SESSION', { cookie, ipAddress })

    const { auth_id } = cookie

    try {
      const headers = { 'X-Source': 'REFRESH_SESSION' }
      if (ipAddress) headers['X-Forwarded'] = ipAddress

      const {
        data: { response }
      } = await this.$axios.post('/auth/get', { auth_id }, { headers })

      commit('ADD_SESSION', response.auth)

      if (response.auth.auth_id === auth_id) {
        commit('SET_STATE', response)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      if (err.response) console.error(err.response.status, err.response.data)
    }
  },
  async LOAD_STATE({ state, commit }) {
    const {
      data: { response }
    } = await this.$axios.post(
      '/auth/get',
      {
        auth_id: state.session.auth_id
      },
      { headers: { 'X-Source': 'LOAD_STATE' } }
    )
    commit('SET_STATE', response)
  },
  async SET_CURRENT_TEAM({ state, commit }, { selectedTeam }) {
    await this.$axios.post(
      '/auth/get',
      {
        auth_id: state.session.auth_id,
        custom_auth_params: {
          'p.current_team': selectedTeam
        }
      },
      { headers: { 'X-Source': 'SET_CURRENT_TEAM' } }
    )
    // if (data.error_state === true) {
    //   console.log('error_state', data.error_state)
    //   commit(' ADD_SESSION_ERROR', data.errors)
    //   return
    // }

    commit('SELECT_TEAM', { selectedTeam })
  }
}
