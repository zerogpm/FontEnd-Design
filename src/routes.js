import SiderForm from './app/form/components/SlidingSiderForm'
import HoverSearch from './app/input/components/Hover-Search'
import GrowingButton from './app/input/components/Growing-Button'
import SocialMediaRising from './app/3d/components/SocialMediaRising'
import Banner from './components/Banner'

export const routes = [
  { path: '', component: Banner },
  { path: '/form', component: SiderForm, name: 'slidingSiderForm' },
  { path: '/3d/rising', component: SocialMediaRising, name: 'socialMediaRising' },
  { path: '/input', component: HoverSearch, name: 'hoverSearch' },
  { path: '/input/growingButton', component: GrowingButton, name: 'growingButton' }
]
