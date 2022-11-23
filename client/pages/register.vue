<template>
  <div>
    <h1>Register</h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" :hasName="true" />
  </div>
</template>

<script>
import userAuthForm from '@/components/UserAuthForm.vue'
export default {
  components: {
    userAuthForm,
  },
  methods: {
    async registerUser(registrationInfo) {
      await this.$axios.post('http://localhost:8000/api/users/register', registrationInfo)
      this.$auth.loginWith('local', {
        data: registrationinfo,
      })
    },
  },
}
</script>

<style></style>
