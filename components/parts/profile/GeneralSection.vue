<template lang="pug">
div
    div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 General Information
          p.mt-1.text-sm.leading-5.text-gray-500 Provider information about yourself and your business.
      .mt-5(class="md:mt-0 md:col-span-2")
        form(@submit.prevent="onSavePersonal")
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

            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6")
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Save
      
    .hidden(class="sm:block"): .py-5: .border-t.border-gray-200

    div(class="md:grid md:grid-cols-3 md:gap-6")
      div(class="md:col-span-1")
        .px-4(class="sm:px-0")
          h3.text-lg.font-medium.leading-6.text-gray-900 Reset Password
          p.mt-1.text-sm.leading-5.text-gray-500 Update your login password.
      .mt-5(class="md:mt-0 md:col-span-2")
        form(@submit.prevent="onResetPassword")
          .shadow.overflow-hidden(class="sm:rounded-md")
            .px-4.py-5.bg-white(class="sm:p-6")
              .grid.grid-cols-6.gap-6
                .col-span-6(class="sm:col-span-3")
                  label.block.text-sm.font-medium.leading-5.text-gray-700(for="newpassword") New Password
                  PasswordField#newpassword(v-model="password")
                
            .px-4.py-3.bg-gray-50.text-right(class="sm:px-6")
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Reset Password
          
    AlertModal(ref="alert")
</template>

<script>
import AlertModal from '../../controls/AlertModal'
import PasswordField from '../../controls/PasswordField'
export default {
  name: 'ProfilePage',
  components: { PasswordField, AlertModal },
  data() {
    return {
      localUser: {}
    }
  },
  computed: {
    password: {
      get() {
        return this.localUser['p.password'] || this.user['p.password']
      },
      set(value) {
        this.$set(this.localUser, 'p.password', value)
      }
    },
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
    onResetPassword() {
      //   try {
      //    const { data } = await this.$axios.post('/password/reset', {
      //      custom_user_params: {
      //        'p.firstname': this.firstname,
      //        'p.lastname': this.lastname,
      //        'p.companyname': this.companyname,
      //        'p.postcode': this.postcode
      //      }
      //    })
      //    this.$store.dispatch('LOAD_STATE')
      //   this.$refs.alert.success({errors:["Password Updated"] })
      //  } catch (error) {
      //   this.$refs.alert.error({errors:["Error saving password"] })
      //    alert(error.message)
      //    // AlertModal.
      //  }
    },
    async onSavePersonal() {
      console.log('oSP')
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
        this.$refs.alert.success({ title: 'Information updated' })
      } catch (errors) {
        this.$refs.alert.error({ errors })
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
