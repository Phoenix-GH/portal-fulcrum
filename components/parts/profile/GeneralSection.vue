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
    
            .px-4.py-3.bg-gray-50.flex.justify-between(class="sm:px-6")
              button.py-2.px-4.border-2.border-gray-300.text-gray-500.text-sm.leading-5.font-medium.rounded-md.shadow-sm.transition.duration-150.ease-in-out(type="button" @click="onResetPassword" class="hover:border-indigo-500 hover:text-indigo-600 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Request Password Reset
              button.py-2.px-4.border.border-transparent.text-sm.leading-5.font-medium.rounded-md.text-white.bg-indigo-600.shadow-sm.transition.duration-150.ease-in-out(type="submit" class="hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600") Save
      
    //-.hidden(class="sm:block"): .py-5: .border-t.border-gray-200

    //-div(class="md:grid md:grid-cols-3 md:gap-6")
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
          
    //--AlertModal(ref="alert")
</template>

<script>
import PasswordField from '../../controls/PasswordField'
export default {
  name: 'ProfilePage',
  components: { PasswordField },
  inject: ['alert'],
  data() {
    return {
      localUser: {}
    }
  },
  computed: {
    password: {
      get() {
        return this.localUser['p.password'] || (this.user && this.user['p.password'])
      },
      set(value) {
        this.$set(this.localUser, 'p.password', value)
      }
    },
    firstname: {
      get() {
        return this.localUser['p.firstname'] || (this.user && this.user['p.firstname'])
      },
      set(value) {
        this.$set(this.localUser, 'p.firstname', value)
      }
    },
    lastname: {
      get() {
        return this.localUser['p.lastname'] || (this.user && this.user['p.lastname'])
      },
      set(value) {
        this.$set(this.localUser, 'p.lastname', value)
      }
    },
    companyname: {
      get() {
        return this.localUser['p.companyname'] || (this.user && this.user['p.companyname'])
      },
      set(value) {
        this.$set(this.localUser, 'p.companyname', value)
      }
    },
    postcode: {
      get() {
        return this.localUser['p.postcode'] || (this.user && this.user['p.postcode'])
      },
      set(value) {
        this.$set(this.localUser, 'p.postcode', value)
      }
    },
    primaryEmail() {
      return Array.from((this.$store.state && this.$store.state.emails) || []).find((x) => x.default).email
    },
    user() {
      return this.$store.state.user
    }
  },
  mounted() {
    console.log('!', this)
  },
  methods: {
    async onResetPassword() {
      console.log('onResetPassword')
      try {
        await this.$axios.post('/password/reset-request', {
          email: this.primaryEmail
        })
        this.alert.success({ title: 'Success', text: 'Password reset email sent' })
      } catch (err) {
        this.alert.error(err)
      }
    },
    async onSavePersonal() {
      console.log('onSavePersonal')
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
        this.alert.success({ title: 'Information updated' })
      } catch (err) {
        this.alert.error(err)
      }
    },
    createLocalState(key) {
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
