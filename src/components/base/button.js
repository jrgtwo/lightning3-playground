import Blits from '@lightningjs/blits'

export default Blits.Component('Button', {
  props: ['text', 'selected'],
  template: `
    <Element w="150" h="150" alpha="0.8" x="150" y="0">
      <Text
        content="Home"
        content="$text"
        align="center"
        wordwrap="150"
        lineheight="150"
        :color="$selected ? 'red': 'white'"
      />
    </Element>
  `
})