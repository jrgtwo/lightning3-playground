import Blits from '@lightningjs/blits'
import Page from '../base/page'
import Page2Contents from './Page2Contents'

export default Blits.Component('Page2', {
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
      page: Page2Contents,
      pageName: "Page 2"
    }
  },
  template: `
    <Page name="$pageName" pageComponent="$page" ref="pageComp" />
  `
})