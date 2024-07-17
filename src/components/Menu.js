import Blits from '@lightningjs/blits'
import Button from '../components/base/button'
export default Blits.Component('Menu', {
  components: {
    Button
  },
  state() {
    return {
      focusedItem: 0
    }
  },
  input: {
    right() {
      if (this.focusedItem + 1 < this.menuItems.length) {
        this.focusedItem += 1
      }
    },
    left(){
      if (this.focusedItem - 1 > -1) {
        this.focusedItem -= 1
      }
    },
    enter() {
      this.parent.$router.to(this.menuItems[this.focusedItem][1])
    }
  },
  hooks: {
    init() {
      const currRoute = window.location.hash.replace('#','')
      this.focusedItem = this.menuItems.findIndex((route) => route[1] === currRoute)
    },
  },
  props: [
    'menuItems'
  ],
  template: `
    <Element w="1920" h="150" color="{top: 'black', bottom: 'transparent'}" :alpha="$hasFocus ? 1:0.5">
      <Button
        :for="(item, index) in $menuItems"
        :text="$item[0]"
        :x="$index * 150"
        :key="'menuItem' + $index"
        :ref="'menuItem' + $index"
        :selected="$focusedItem === $index"
      />
    </Element>
  `
})