import { createApp } from "vue";
import NavBar from "./component/NavBar.vue";
import FooTer from "./component/FooTer.vue";

const app = createApp({})
app.component('NavBar', NavBar)
app.component('FooTer', FooTer)

app.mount('#app')
