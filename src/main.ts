import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/main.css";

// Libreria para mostrar popups
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Libreria para dibujar grafos
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

createApp(App).use(store).use(router).use(Toast).use(VNetworkGraph).mount('#app')
