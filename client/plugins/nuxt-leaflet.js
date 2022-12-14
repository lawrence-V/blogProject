import Vue from "vue";
import { LMap, LTileLayer, LMarker, LTooltip, LPopup } from "vue2-leaflet";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-popup", LPopup);
Vue.component("l-marker", LMarker);
Vue.component("l-tooltip", LTooltip);
