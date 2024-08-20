import Blits from '@lightningjs/blits'
export default Blits.Component('Page', {
  template: `
    <Element w="1920" h="1080" color="grey">
      <Slot ref="slotref" />
    </Element>
  `
})