import Ai from '../views/Home/ai'
import Android from '../views/Home/android'
import Attention from '../views/Home/attention'
import BackEnd from '../views/Home/backEnd'
import FrontEnd from '../views/Home/frontEnd'
import Hot from '../views/Home/hot'
import Ios from '../views/Home/ios'
import Read from '../views/Home/read'
import Recommend from '../views/Home/recommend'

const router = [
  {
    path: 'ai',
    name: 'ai',
    component: Ai
  }, {
    path: 'android',
    name: 'android',
    component: Android
  }, {
    path: 'attention',
    name: 'attention',
    component: Attention
  }, {
    path: 'backEnd',
    name: 'backEnd',
    component: BackEnd
  }, {
    path: 'frontEnd',
    name: 'frontEnd',
    component: FrontEnd
  }, {
    path: 'hot',
    name: 'hot',
    component: Hot
  }, {
    path: 'ios',
    name: 'ios',
    component: Ios
  }, {
    path: 'read',
    name: 'read',
    component: Read
  }, {
    path: 'recommend',
    name: 'recommend',
    component: Recommend
  }
]

export default router
