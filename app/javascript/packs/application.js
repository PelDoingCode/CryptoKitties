import "bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!
import "../plugins/flatpickr"

import { initMapbox } from '../plugins/init_mapbox';
import { loadDynamicText } from '../plugins/init_mapbox';
import { initSweetalert } from '../plugins/init_sweetalert';

initSweetalert('.sweet-alert-demo', {
  title: "YOUR PURR-FECT FRIEND HAS BEEN CREATED",
  text: "This is a great KITTY, isn't it?",
  icon: "success"
});



initMapbox();

loadDynamicText();
