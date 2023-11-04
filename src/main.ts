import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store';

// input validation rules
import {rules} from './utils/rules.js'

// toastr
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify({
    components,
    directives,
})
  
const app = createApp(App);
app.config.globalProperties.$rules = rules
app.use(router).use(store).use(vuetify)
app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    newestOnTop: true
});
app.mount('#app')
