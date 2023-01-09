import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(PrimeVue)
}
