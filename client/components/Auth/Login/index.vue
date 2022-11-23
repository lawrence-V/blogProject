<template>
  <div>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="loginData.email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="loginData.password"
          class="form-control"
          id="password"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">login</button>
    </form>

    <!-- <v-form>
      <v-text-field v-model="loginData.email" label="Email"></v-text-field>
      <v-text-field
        v-model="loginData.password"
        label="Password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        counter="true"
      ></v-text-field>
      <v-btn @submit.prevent="login" color="success" block>{{ buttonText }}</v-btn>
    </v-form> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      loginData: {
        email: 'test@test.com',
        password: '12345678',
      },
    }
  },
  props: ['buttonText'],
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.loginData,
        })
        this.$router.push('/')
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
