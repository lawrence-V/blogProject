<template>
  <client-only>
    <div id="map-wrap" style="height: 100vh">
      <l-map :zoom="4" :center="[55.9464418, 8.1277591]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker
          v-for="marker in markers"
          :key="marker.id"
          :lat-lng="[marker.lat, marker.lng]"
        >
          <l-icon
            :icon-size="[40, 40]"
            :icon-anchor="[22, 94]"
            icon-url="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png"
          />
          <l-popup
            ><v-row no-gutters>
              <v-col
                align="center"
                justify="center"
                class="headline font-weight-medium pb-4"
              >
                {{ marker.title }}</v-col
              >
              <v-col> <v-btn depressed color="primary"> Submit </v-btn></v-col>
            </v-row>
          </l-popup>
        </l-marker>
      </l-map>

      <!-- <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
      </l-map> -->
    </div>
  </client-only>
</template>

<script>
export default {
  ssr: false,
  data() {
    return {
      // browser: process.browser,
      markers: [
        { id: 1, lat: 55.8350812, lng: 8.1634942, title: 'Sirib' },
        { id: 2, lat: 47.41322, lng: -1.229482, title: 'DOST' },
        { id: 3, lat: 14.599512, lng: 120.984222, title: 'DSWD' },
        { id: 4, lat: 52.520008, lng: 13.404954, title: 'CHED' },
      ],
    }
  },
  methods: {
    removeMarker(index) {
      this.markers.splice(index, 1)
    },
    addMarker(event) {
      this.markers.push(event.latlng)
    },
  },
}
</script>
<style>
/* #map-wrap {
  height: 100%;
  width: 100%;
} */
</style>
