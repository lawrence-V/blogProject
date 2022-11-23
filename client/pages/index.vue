<template>
  <div>
    <form action="" @submit.prevent="AddPost" enctype="multipart/form-data">
      <v-card>
        <v-card-title>Title</v-card-title>
        <v-text-field
          label="Title:"
          outlined
          class="px-4"
          v-model="Blog.title"
        ></v-text-field>
        <v-card-title>Description</v-card-title>
        <v-textarea
          name="input-7-1"
          filled
          label="Input description"
          auto-grow
          class="px-4"
          v-model="Blog.des"
        ></v-textarea>

        <v-file-input accept="image/*" label="File input"></v-file-input>

        <nuxt-link :to="{ name: 'allpost' }" style="text-decoration: none">
          <v-card-actions class="pa-4">
            <v-btn block color="info" @click="AddPost"> Create Post </v-btn>
          </v-card-actions>
        </nuxt-link>
      </v-card>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      Blog: {
        title: '',
        des: '',
        file: [],
      },
    }
  },
  methods: {
    selectFile() {
      this.Blog.file = this.$refs.file.files[0]
    },
    async AddPost() {
      // const formData = new FormData()
      // this.Blog.formData.append('file', this.Blog.file)
      await this.$axios
        .$post('http://localhost:8000/post', this.Blog)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
