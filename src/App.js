import Blits from '@lightningjs/blits'

import Home from './pages/Home.js'
import FocusPlayground from './pages/FocusPlayground.js'

export default Blits.Application({
  template: `
    <Element>
      <RouterView />
    </Element>
  `,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: 'focusPlayground',
      component: FocusPlayground,
    },
  ],
})
