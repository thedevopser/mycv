import { createApp } from "vue";
import NavBar from "./component/NavBar.vue";

const app = createApp({})
app.component('NavBar', NavBar)

app.mount('#app')
