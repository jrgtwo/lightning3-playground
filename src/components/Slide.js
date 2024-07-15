import Blits from '@lightningjs/blits'
export default Blits.Component('Slide', {
  props: ['content', 'active'],
  template: `
    <Element>
      <Text content="$content" :color="$color" :size="$size" y="0" />
      <Text :content="$enterText" :color="$color" y="50" :show="$showEnterText" />
    </Element>
  `,
  hooks: {
    focus(e) {
      this.color = 'white'
      this.size = 55
    },
    unfocus(e) {
      this.color = 'red'
      this.size = 32
    },
  },
  state() {
    return {
      size: 32,
      currTimerId: null,
      color: 'red',
      enterText: 'You Pressed Enter',
      showEnterText: false,
    }
  },
  input: {
    enter() {
      if (this.currTimerId) {
        clearTimeout(this.currTimerId)
      }
      this.showEnterText = true
      this.currTimerId = setTimeout(() => {
        this.showEnterText = false
      }, 1000)
    },
  },
})
