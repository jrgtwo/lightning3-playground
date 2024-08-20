import Blits from '@lightningjs/blits'
import Page from '../base/page'
import Page1Contents from './Page1Contents'

export default Blits.Component('Page1', {
  components: {Page, Page1Contents},
  hooks: {
    ready() {
      this.select('pageComp').focus()
      debugger
    },
    focus(){
      this.select('pageComp').focus()
    }
  },
  input: {
    enter() {
      console.log()
      if (this.select('someelem').hasFocus) {
        alert('You clicked the button!')
      }
    }
  },
  template: `
    <Page ref="pageComp">
      <Element w="150" h="50" color="black" x="960" y="540" mount="0.5" :alpha="$hasFocus ? 1 : 0.5">
        <Text content="hi there" color="white" align="center" wordwrap="150" w="150" lineheight="50" />
      </Element>
    </Page>
  `
})