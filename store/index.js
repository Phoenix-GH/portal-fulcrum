export const state = () => ({
  authenticated: false,
  sessionKey: null,
  sessionError: null,
  user: null
})

export const mutations = {
  ADD_SESSION(state, session) {
    console.log('M::ADD_SESSION', session)
    state.sessionKey = session
  },
  ADD_SESSION_ERROR(state, error) {
    console.log('M::ADD_SESSION_ERROR', error)
    state.sessionKey = error
  }
}

export const actions = {
  async ADD_SESSION({ state, commit }) {
    console.log('A::ADD_SESSION', state)

    if (state.sessionKey !== null) return

    const { data } = await this.$axios.post('/auth/get', {})
    console.log(data.response.auth.auth_id)

    if (data.error_state === true) {
      console.log('error_state', data.error_state)
      commit(' ADD_SESSION_ERROR', data.errors)
      return
    }
    commit('ADD_SESSION', data.response.auth)
  }
}
