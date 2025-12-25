import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import themeConfig from './shared/theme/themeConfig'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import './app/styles.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(createVuetify({
  components,
  directives,
  theme: themeConfig,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
}))

app.mount('#app')
