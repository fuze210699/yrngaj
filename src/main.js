import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import './assets/components.css'
import './assets/theme.css'
import './assets/styles.css'
import { applyBrowserPatches } from './utils/browser-patches'
import CommonComponents from './components/common'

// Apply patches for browser extensions or third-party scripts
applyBrowserPatches()

const app = createApp(App)

// Register common components
app.use(CommonComponents)

app
  .use(store)
  .use(router)
  .mount('#app') 