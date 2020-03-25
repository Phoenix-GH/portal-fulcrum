import Vue from 'vue'

const STORAGE_KEY = 'AppState'
let _loaded = false
let _hasState = false

const state = Vue.observable({
  sessionKey: null
})

const saveState = () => {
  _hasState = true
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      ...state
    })
  )
}

const loadState = (o) => {
  const json = localStorage.getItem(STORAGE_KEY) || null

  if (json) {
    _loaded = true
    Object.assign(o, JSON.parse(json))
    _hasState = true
  }
}

export const clearState = () => {
  localStorage.removeItem(STORAGE_KEY)
  _hasState = false
}

export const mapCache = (...args) => {
  const o = {}
  args.forEach((x) => {
    o[x] = {
      get() {
        return state[x]
      },
      set(value) {
        this.$set(state, x, value)
        saveState(value)
      }
    }
  })
  return o
}

export default async ({ store, $axios }, inject) => {
  inject('state', state)

  loadState(state)
  if (!_hasState) {
    const { data } = await $axios.post('/auth/get')
    state.sessionKey = data.response.auth
    saveState()
  }
}

// Vue.prototype.$state = state
