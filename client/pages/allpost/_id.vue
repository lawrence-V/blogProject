<template>
  <div>
    <h1>Edit post</h1>
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
      <nuxt-link :to="{ name: 'allpost' }" style="text-decoration: none">
        <v-card-actions class="pa-4">
          <v-btn block color="info" @click="updatePost"> Edit Post </v-btn>
        </v-card-actions>
      </nuxt-link>
    </v-card>
  </div>
</template>

<script>
// import axios from 'axios'

const urlgeteditData = "http://localhost:8100/edit/";
const updateurl = "http://localhost:8100/update/";
export default {
  data() {
    return {
      Blog: {
        title: "",
        des: "",
      },
    };
  },
  methods: {
    async updatePost() {
      await this.$axios
        .put(updateurl + this.$route.params.id, this.Blog)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  async mounted() {
    const result = await this.$axios.get(
      urlgeteditData + this.$route.params.id
    );

    this.Blog = result.data;
  },
};
</script>

<style></style>
