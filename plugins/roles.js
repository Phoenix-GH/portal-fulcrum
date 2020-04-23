import Vue from 'vue'
import { scopes, roles, canManage, hasScope } from '../utils/roles'

Vue.prototype.$roles = { scopes, roles, canManage, hasScope }
