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

        <label for="file" class="label">Upload File</label>
        <input type="file" ref="file" @change="upload($event)" />

        <!-- <v-card class="mt-5">
          <client-only>
            <div id="map-wrap" style="height: 50vh">
              <l-map :zoom="4" :center="[55.9464418, 8.1277591]">
                <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></l-tile-layer>
                <l-marker
                  :lat-lng="markerPos1"
                  :options="{
                    draggable,
                  }"
                  :popup="popup"
                  @dblclick="draggable = !draggable"
                  @dragend="setMarkerPosition"
                ></l-marker>
                <l-marker
                  :lat-lng="markerPos2"
                  :options="{
                    draggable,
                  }"
                  @dragend="setCustomMarkerPosition"
                >
                  <l-tooltip>
                    <span v-if="!draggable">
                      You can drag me if you <strong>double click</strong><br />
                      the other marker first
                    </span>
                    <span v-else> I am draggable too </span>
                  </l-tooltip>
                </l-marker>
              </l-map>
            </div>
          </client-only>
        </v-card>
        <pre>draggable: {{ draggable }}</pre>
        <pre>markerPos: {{ markerPos1 }}</pre>
        <pre>customMarkerPos: {{ markerPos2 }}</pre>
        <p>test cor</p>
        <pre>markerPos: {{ markLat }}</pre>
        <pre>markerPos: {{ markLong }}</pre> -->

        <nuxt-link :to="{ name: 'allpost' }" style="text-decoration: none">
          <v-card-actions class="pa-4">
            <v-btn block color="info" @click="upload"> Create Post </v-btn>
          </v-card-actions>
        </nuxt-link>
      </v-card>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  ssr: false,
  data() {
    return {
      Blog: {
        title: "",
        des: "",
        // file: "",
      },
      file: "",
      name: "",

      markerPos1: [48.864716, 2.349014],
      markerPos2: [49.93333, 1.08333],
      markLat: "",
      markLong: "",
      draggable: true,
    };
  },
  computed: {
    popup() {
      return this.draggable
        ? "I am draggable, gimme a double click I ll be pinned"
        : "I am pinned, gimme a double click, I ll be draggable";
    },
  },
  methods: {
    // removeMarker(index) {
    //   this.markers.splice(index, 1);
    // },
    // addMarker(event) {
    //   this.markers.push(event.latlng);
    // },
    setPos(e) {
      const layer = e.target;
      const ll = layer.getLatLng();
      layer.setLatLng(ll);
      return [ll.lat, ll.lng];
    },
    setMarkerPosition(e) {
      this.markerPos1 = this.setPos(e);
      this.markLat = this.markerPos1[0];
      this.markLong = this.markerPos1[1];
    },
    setCustomMarkerPosition(e) {
      this.markerPos2 = this.setPos(e);
    },
    upload(event) {
      let data = new FormData();
      let file = event.target.files[0];
      let title = this.Blog.title;
      let des = this.Blog.des;
      this.name = event.target.files[0].name;
      let name = this.name;
      let lat = this.markerPos1[0];
      let lang = this.markerPos1[1];

      data.append("title", title);
      data.append("des", des);
      data.append("name", name);
      data.append("lat", lat);
      data.append("lang", lang);

      data.append("file", file);

      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };

      this.$axios
        .post("http://localhost:8100/post", data, config)
        .then((response) => {});
    },
  },
};
</script>

<style></style>
