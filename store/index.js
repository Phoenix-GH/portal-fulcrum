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
  user_emails: [],
  meta: null
})

export const mutations = {
  ADD_SESSION(state, session) {
    // console.log('M::ADD_SESSION', session)
    state.session = session
    this.$cookies.set(COOKIE_NAME, session.auth_id)
  },
  // ADD_SESSION_ERROR(state, error) {
  //   console.log('M::ADD_SESSION_ERROR', error)
  //   state.sessionKey = error
  // },
  SELECT_TEAM(state, source) {
    state.selectedTeam = source.selectedTeam
    localStorage.setItem('SELECTED_TEAM', source.selectedTeam)
  },
  SET_STATE(state, source) {
    // console.log('M::SET_STATE', source)
    state.user = source.user
    state.teams = source.teams
    state.selectedTeam = source.selectedTeam
    state.invites = source.invites
    state.user_emails = source.user_emails
    state.authenticated = true
  },
  CLEAR_STATE(state, source) {
    // console.log('M::CLEAR_STATE', source)
    state.user = null
    state.teams = null
    state.selectedteam = null
    state.invites = null
    state.user_emails = null
    state.authenticated = false
  },
  SET_META(state, meta) {
    state.meta = meta
  }
}

export const actions = {
  async GENERATE_SESSION({ state, commit }) {
    // console.log('A::GENERATE_SESSION')
    const {
      data: { response }
    } = await this.$axios.post('/auth/get', {}, { headers: { 'x-source': 'GENERATE_SESSION' } })

    commit('ADD_SESSION', response.auth)
  },
  async REFRESH_SESSION({ state, commit }, auth_id) {
    // console.log('A::REFRESH_SESSION', auth_id)
    const {
      data: { response }
    } = await this.$axios.post('/auth/get', { auth_id }, { headers: { 'x-source': 'REFRESH_SESSION' } })

    commit('ADD_SESSION', response.auth)

    if (response.auth.auth_id === auth_id) {
      if (process.client) response.selectedTeam = parseInt(localStorage.getItem('SELECTED_TEAM'))
      commit('SET_STATE', response)
    }
  },
  async LOAD_STATE({ state, commit }) {
    // console.log('A::LOAD_STATE', this.$state)

    const {
      data: { response }
    } = await this.$axios.post(
      '/auth/get',
      {
        auth_id: state.session.auth_id
      },
      { headers: { 'x-source': 'LOAD_STATE' } }
    )

    // if (data.error_state === true) {
    //   console.log('error_state', data.error_state)
    //   commit(' ADD_SESSION_ERROR', data.errors)
    //   return
    // }

    response.selectedTeam = parseInt(localStorage.getItem('SELECTED_TEAM'))
    commit('SET_STATE', response)
  }
}
