import Blits from '@lightningjs/blits'
import Page from '../base/page'
import Page4Contents from './Page4Contents'

export default Blits.Component('Page4', {
  components: {Page},
  hooks: {
    focus(){
      this.select('pageComp').focus()
    }
  },
  input: {
    enter() {
      alert('You clicked the button!')
    }
  },
  state(){
    return {
      page: Page4Contents,
      pageName: "Page 4"
    }
  },
  template: `
    <Page name="$pageName" pageComponent="$page" ref="pageComp" />
  `
})