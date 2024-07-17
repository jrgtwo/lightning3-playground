import Blits from '@lightningjs/blits'
import Button from '../base/button'
export default Blits.Component('Page1', {
  components: {Button},
  hooks: {
    ready() {
      this.select('pageComponent').focus()
    },
    focus() {
      this.select('pageComponent').focus()
    }
  },
  input: {
    enter() {
      alert('You clicked the button!')
    }
  },
  props:['pageComponent', 'name'],
  template: `
    <Element w="1920" h="1080" color="grey">
      <Text content="$name" x="50" y="175" />
      <Component is="$pageComponent" pageName="$name" ref="pageComponent" />
    </Element>
  `
})