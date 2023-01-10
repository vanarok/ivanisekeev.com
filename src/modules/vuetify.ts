import '../styles/main.scss'
import { createVuetify } from 'vuetify'

import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const vuetify = createVuetify({
    ssr: true,
  })
  app.use(vuetify)
}
