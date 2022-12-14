<template>
  <div>
    <v-row class="mt-4">
      <v-col>
        <v-card class="pa-5">
          <v-list-item-title class="text-h5 mb-1">
            {{ Post.title }}
          </v-list-item-title>
          <v-card-text class="mb-4">{{ Post.des }}</v-card-text>
          <v-card-text class="mb-4">{{ Post.lat }}</v-card-text>
          <v-card-text class="mb-4">{{ marker }}</v-card-text>

          <div class="d-flex flex-column justify-space-between align-center">
            <v-img
              class="rounded-circle"
              max-height="1000"
              max-width="1000"
              :src="`http://localhost:8100/uploads/${Post.name}`"
            ></v-img>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- 
    <client-only>
      <div id="map-wrap" style="height: 50vh">
        <l-map :zoom="4" :center="[Post.lat, Post.lang]">
        <l-map :zoom="4" :center="[55.9464418, 8.1277591]">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="marker"></l-marker>
        </l-map>
      </div>
    </client-only> -->

    <div class="mt-2 pa-2">
      <nuxt-link to="/newsfeed" style="text-decoration: none">
        <v-btn depressed color="primary">Back</v-btn></nuxt-link
      >
    </div>
  </div>
</template>

<script>
const url = "http://localhost:8100/details/";

export default {
  data() {
    return {
      Post: [],
      marker: [],
    };
  },
  async mounted() {
    const result = await this.$axios.get(url + this.$route.params.id);
    console.log(result.data);
    console.log(result.data.lat);
    console.log(result.data.lang);
    this.marker[0] = result.data.lat;
    this.marker[1] = result.data.lang;
    console.log(this.marker);
    // this.marker[0] = result.data
    this.Post = result.data;
  },
};
</script>

<style></style>
