import { createApp } from "vue";
import Hello from "./component/Hello.vue";

const app = createApp({})
app.component('HelloWorld', Hello)

app.mount('#app')
