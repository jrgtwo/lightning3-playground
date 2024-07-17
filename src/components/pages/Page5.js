import Blits from '@lightningjs/blits'
import Page from '../base/page'
import Page5Contents from './Page5Contents'

export default Blits.Component('Page5', {
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
      page: Page5Contents,
      pageName: "Page 5"
    }
  },
  template: `
    <Page name="$pageName" pageComponent="$page" ref="pageComp" />
  `
})