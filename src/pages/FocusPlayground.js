import Blits from '@lightningjs/blits'
import Slide from '../components/Slide'
export default Blits.Component('Secondary', {
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Text size="55" content="Focus and User Input" y="0" />
      <Slide content="Slide 1" y="100" ref="0" />
      <Slide content="Slide 2" y="200" ref="1" />
      <Slide content="Slide 3" y="300" ref="2" />
      <Slide content="Slide 4" y="400" ref="3" />
      <Slide content="Slide 5" y="500" ref="4" />
    </Element>
  `,
  components: {
    Slide,
  },
  state() {
    return {
      index: 0,
      maxSlides: 5,
    }
  },
  input: {
    left(e) {
      // Couldn't find any built in Route Methods
      // Need to dive deeper into the docs
      window.location.hash = ''
    },
    down() {
      if (this.index + 1 < this.maxSlides) {
        this.index = this.index + 1
        this.selectSlide(this.index)
      }
    },
    up() {
      if (this.index - 1 > -1) {
        this.index = this.index - 1
        this.selectSlide(this.index)
      }
    },
  },
 
  hooks: {
    ready(e) {
      this.selectSlide(this.index)
    },
  },
  methods: {
    selectSlide(index) {
      const selectedSlide = this?.select(index)
      if (selectedSlide?.focus) {
        selectedSlide.focus()
      }
    },
  }
})
