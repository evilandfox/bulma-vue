import 'bulma/css/bulma.min.css'
import {createApp} from 'vue'
import App from './App.vue'

import {router} from './router'

export const app = createApp(App)

app.use(router).mount('#app')
