import Blits from "@lightningjs/blits";

export default Blits.Component('Page1Contents', {
  template:`
    <Element w="150" h="50" color="black" x="960" y="540" mount="0.5" :alpha="$hasFocus ? 1 : 0.5">
      <Text content="hi there" color="white" align="center" wordwrap="150" w="150" lineheight="50" />
    </Element>
  `
})