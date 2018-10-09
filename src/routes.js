import SiderForm from './app/form/components/SlidingSiderForm'
import Banner from './components/Banner'

export const routes = [
  { path: '', component: Banner },
  { path: '/form', component: SiderForm, name: 'slidingSiderForm' }
]
