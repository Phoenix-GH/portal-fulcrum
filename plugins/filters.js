import Vue from 'vue'
import { format } from 'date-fns'
import { toDate } from '../utils'

Vue.filter('toDate', toDate)

// Vue.filter('formatRelative', formatRelative)

// Vue.filter('formatRelativeNow', function(value, options) {
//   console.log(">>", value, options, formatRelative)
//   return formatRelative(value, new Date(), options)
// })

Vue.filter('format', format)
