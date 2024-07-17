import Blits from '@lightningjs/blits'

import Loader from '../components/Loader.js'

export default Blits.Component('Home', {
  components: {
    Loader,
  },
  input: {
    right(e) {
      this.$router.to('focusPlayground')
    },
  },
  state() {
    return {
      showLoader: true,
      showDirections: false,
    }
  },
  hooks: {
    ready() {
      setTimeout(() => {
        this.showLoader = false
        this.showDirections = true
      }, 5000)
    },
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Element src="assets/logo.png" w="200" h="200" x="860" y="320" :effects="[$shader('radius', {radius: 12})]" />
      <Loader x="880" y="600" :show="$showLoader" />
      <Text content="Press right to enter focus playground" :show="$showDirections" x="960" y="600" mount="0.5" />
    </Element>
  `,
})
