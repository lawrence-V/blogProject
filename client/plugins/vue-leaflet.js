// import Vue from "vue";
// import "leaflet/dist/leaflet.css";
// import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
// const VueLeaflet = {
//   install(Vue, options) {
//     Vue.component("l-map", LMap);
//     Vue.component("l-marker", LMarker);
//     Vue.component("l-tile-layer", LTileLayer);
//     // Vue.prototype.PruneCluster = PruneCluster;
//     // Vue.prototype.PruneClusterForLeaflet = PruneClusterForLeaflet;
//   },
// };
// Vue.use(VueLeaflet);
// export default VueLeaflet;

import Vue from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
