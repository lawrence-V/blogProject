<template>
  <div>
    <v-row class="mt-4">
      <v-col>
        <v-card class="pa-5">
          <v-list-item-title class="text-h5 mb-1">
            {{ Post.title }}
          </v-list-item-title>
          <v-card-text class="mb-4">{{ Post.des }}</v-card-text>
          <nuxt-link to="/newsfeed" style="text-decoration: none">
            <v-btn depressed color="primary">Back</v-btn></nuxt-link
          >
          <!-- <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="150"
            max-width="250"
            :src="require(`./../../../uploads/${post.file}`)"
          ></v-img> -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const url = 'http://localhost:8000/details/'

export default {
  data() {
    return {
      Post: [],
    }
  },
  async mounted() {
    const result = await this.$axios.get(url + this.$route.params.id)
    console.log(result.data)
    this.Post = result.data
  },
}
</script>

<style></style>
