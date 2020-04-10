<template lang="pug">
div

  div
    div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 General Information
          p.mt-1.text-sm.leading-5.text-gray-500 Provider information about yourself and your business.
      .mt-5(class="md:mt-0 md:col-span-2")
        form(method="POST" @submit.prevent="onSavePersonal")
          .shadow.overflow-hidden(class="sm:rounded-md")
            .px-4.py-5.bg-white(class="sm:p-6")
              .grid.grid-cols-6.gap-6
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="first_name") First name
                  input#first_name.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="firstname")
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="last_name") Last name
                  input#last_name.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="lastname")
                .col-span-6(class="sm:col-span-4")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="email_address") Company name
                  input#email_address.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="companyname")
                .col-span-6(class="sm:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="email_address") Zipcode
                  input#email_address.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5" v-model="postcode")

              //-
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="country") Country / Region
                  select#country.mt-1.block.form-select.w-full.py-2.px-3.py-0.border.border-gray-300.bg-white.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                    option United States
                    option Canada
                    option Mexico
                .col-span-6
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="street_address") Street address
                  input#street_address.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                .col-span-6(class="sm:col-span-6 lg:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="city") City
                  input#city.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                .col-span-6(class="sm:col-span-3 lg:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="state") State / Province
                  input#state.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
                .col-span-6(class="sm:col-span-3 lg:col-span-2")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="postal_code") ZIP / Postal
                  input#postal_code.mt-1.form-input.block.w-full.py-2.px-3.border.border-gray-300.rounded-md.shadow-sm.transition.duration-150.ease-in-out(class="focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5")
            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6")
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Save
  
   
</template>

<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      localUser: {}
    }
  },
  computed: {
    firstname: {
      get() {
        return this.localUser['p.firstname'] || this.user['p.firstname']
      },
      set(value) {
        this.$set(this.localUser, 'p.firstname', value)
      }
    },
    lastname: {
      get() {
        return this.localUser['p.lastname'] || this.user['p.lastname']
      },
      set(value) {
        this.$set(this.localUser, 'p.lastname', value)
      }
    },
    companyname: {
      get() {
        return this.localUser['p.companyname'] || this.user['p.companyname']
      },
      set(value) {
        this.$set(this.localUser, 'p.companyname', value)
      }
    },
    postcode: {
      get() {
        return this.localUser['p.postcode'] || this.user['p.postcode']
      },
      set(value) {
        this.$set(this.localUser, 'p.postcode', value)
      }
    },
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    console.log('!', this)
  },
  methods: {
    async onSavePersonal() {
      try {
        const { data } = await this.$axios.post('/user/edit', {
          custom_user_params: {
            'p.firstname': this.firstname,
            'p.lastname': this.lastname,
            'p.companyname': this.companyname,
            'p.postcode': this.postcode
          }
        })
        this.$store.dispatch('LOAD_STATE')
        alert('Saved')
      } catch (error) {
        alert(error.message)
        // AlertModal.
      }
    },
    createLocalState(key) {
      console.log('cls', this.localUser, this.user)
      return {
        get() {
          return this.localUser[key] || this.user[key]
        },
        set(value) {
          this.$set(this.localUser, key, value)
        }
      }
    }
  }
}
</script>

<style>
.active-hover-anchor .active-hover {
  opacity: 0.2;
}

.active-hover-anchor:hover .active-hover {
  opacity: 1;
}
</style>
