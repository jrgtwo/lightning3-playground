import Blits from '@lightningjs/blits'
import Page from '../base/page'
import Page1Contents from './Page1Contents'

export default Blits.Component('Page1', {
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
      page: Page1Contents,
      pageName: "Page 1"
    }
  },
  template: `
    <Page name="$pageName" pageComponent="$page" ref="pageComp" />
  `
})