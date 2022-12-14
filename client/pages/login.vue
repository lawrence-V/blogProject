<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
      <v-btn depressed color="primary"> Login </v-btn>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show1: false,
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async login() {
      try {
        const { data } = await axios.post("http://localhost:8100/login", {
          email: this.email,
          password: this.password,
        });
        if (data.errors) {
          this.emailError = data.errors.email;
          this.passwordError = data.errors.password;
        }
        if (data.user) {
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>