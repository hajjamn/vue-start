import { createApp } from 'vue';
import App from './App.vue';

/* Import Bootstrap and Popper.js */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js

/* Import the FontAwesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/* Import FontAwesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Add icons to the library */
library.add(fas, far, fab);

const app = createApp(App);

/* Register FontAwesomeIcon globally */
app.component('font-awesome-icon', FontAwesomeIcon);

/* Mount the Vue app */
app.mount('#app');
