<template>
  <div>
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </div>
</template>

<script>
import userAuthForm from '@/components/UserAuthForm.vue'
export default {
  components: {
    userAuthForm,
  },
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('local', {
        data: loginInfo,
      })
      alert('Login')
    },
  },
}
</script>

<style></style>
