import Blits from '@lightningjs/blits'
import Menu from './components/Menu'
import Page1 from './components/pages/Page1'
import Home from './components/pages/Home'
import { ROUTES } from './constants/routes'

export default Blits.Application({
  components: {Menu, Page1},
  template: `
    <Element>
      <Menu z="10" menuItems="$menuItems" ref="mainMenu" />
      <RouterView z="5" ref="routerView" />
    </Element>
  `,
  input: {
    up () {
      const menu = this.select('mainMenu')
      if (!menu.hasFocus) {
        menu.focus()
      }
    },
    down() {
      const routerView = this.select('routerView')
      if (!routerView.hasFocus) {
        routerView.focus()
      }
    }
  },
  state(){
    return {
      menuItems: ROUTES,
    }
  },
  routes: ROUTES.map((route) => {
    return {
      path: route[1],
      component: route[2],
    }
  })
})
