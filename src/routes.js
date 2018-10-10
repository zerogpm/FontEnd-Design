import SiderForm from './app/form/components/SlidingSiderForm'
import HoverSearch from './app/input/components/Hover-Search'
import Banner from './components/Banner'

export const routes = [
  { path: '', component: Banner },
  { path: '/form', component: SiderForm, name: 'slidingSiderForm' },
  { path: '/input', component: HoverSearch, name: 'hoverSearch' }
]
