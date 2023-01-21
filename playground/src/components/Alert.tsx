import { Alert, AlertIcon, AlertCloseIcon } from '@smart-react-components/ui'
import React from 'react'

export const Icon = () => (
  <>
    <Alert marginBottom="$length.3">
      <div>Lorem ipsum dolor sit amet</div>
      <AlertIcon hasHover><AlertCloseIcon /></AlertIcon>
    </Alert>
  </>
)

export const Paragraph = () => (
  <>
    <Alert marginBottom="$length.3">
      <h4>Title</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt rhoncus nulla, vitae cursus ipsum egestas eget. In et pulvinar nibh. Integer scelerisque neque eu tellus luctus, non lobortis neque hendrerit. Proin commodo velit nec est gravida, in tempus risus faucibus. Aliquam sapien diam, rhoncus ut tempus sed, lobortis a nulla. Vestibulum pretium vehicula nisl in tempor. Mauris vel condimentum ante. Maecenas in erat ligula. Nunc in ullamcorper turpis, nec rhoncus turpis. Fusce ac auctor tellus. Nullam semper finibus arcu. Duis id odio rhoncus, suscipit sapien aliquam, tempor mi. In sit amet tortor finibus, pulvinar nibh ac, porttitor odio. Donec tincidunt sapien et sapien tristique auctor. Suspendisse lorem risus, efficitur id dui a, convallis vehicula risus.</p>
      <p>Quisque in augue vitae libero pellentesque dictum. Mauris facilisis, libero sed posuere ullamcorper, arcu nibh luctus neque, quis vulputate nisl lacus non ligula. Morbi a orci velit. Fusce lectus dolor, ullamcorper ut ante non, pulvinar commodo lectus. Phasellus viverra pharetra tortor, et vehicula est. Quisque in mi nec purus ultricies blandit. Etiam vel consequat metus, ac pellentesque felis. Morbi nec mi hendrerit erat dapibus egestas. Pellentesque id odio ac nunc commodo rhoncus at eu eros. Duis sodales, eros ac ultrices sodales, purus arcu dapibus nisl, id lobortis mauris massa in ligula. Nam eu augue in eros porttitor ornare sit amet eget lorem. Praesent porttitor tellus eu sodales posuere. Nulla dignissim, turpis at imperdiet posuere, mi massa congue diam, sit amet fringilla metus nulla eget dui.</p>
      <hr />
      <p>Phasellus pretium a felis eget aliquam. Vestibulum consequat diam dignissim sollicitudin fermentum. Suspendisse risus leo, suscipit tristique arcu ac, accumsan consequat risus. Phasellus elit sem, elementum id est nec, lacinia tempus augue. Aliquam nec odio porttitor, placerat tellus sed, fermentum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae imperdiet odio. Nam venenatis hendrerit mollis. In hac habitasse platea dictumst. Vivamus dictum porttitor sem, in mattis ante euismod posuere. Vivamus et elementum est. Quisque porta varius arcu, eu dapibus lorem molestie eget. Vestibulum ut nulla blandit, facilisis turpis at, aliquet libero.</p>
      <p>Sed eget dui in ex sollicitudin placerat. Nulla feugiat sit amet massa sit amet ullamcorper. Ut tempus id felis et feugiat. Aliquam placerat purus eu orci lobortis elementum. Cras id tristique quam, vitae fringilla magna. Aenean eu metus rhoncus, elementum eros eu, porttitor tortor. In id vestibulum magna. Nunc iaculis eros eget mi efficitur commodo quis nec diam. Nullam felis nisi, cursus dapibus libero nec, iaculis tempor purus. Maecenas non sollicitudin urna, eget dignissim leo. Donec id nibh sodales turpis congue malesuada in at massa.</p>
      <p>Suspendisse congue rhoncus augue. <a>Curabitur</a> id metus mi. Curabitur condimentum dignissim justo ut suscipit. Ut molestie velit sed elit finibus, vel volutpat felis euismod. Donec tristique sagittis justo sed interdum. Nam sit amet molestie massa, ut vestibulum sapien. Mauris tincidunt vel nulla sed scelerisque. In nec tortor at mi luctus elementum non at diam. Duis nec imperdiet quam, in euismod erat. Donec venenatis tortor mauris, nec efficitur lectus commodo et. Nam accumsan nunc dolor, ac finibus risus ornare sed. Duis placerat ultrices est eu feugiat. Etiam purus metus, elementum volutpat cursus quis, ultrices at erat. Quisque varius semper nisi sit amet bibendum. Sed molestie vestibulum justo faucibus interdum.</p>  
    </Alert>
  </>
)

export const Palette = () => (
  <>
    <Alert marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="secondary" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="success" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="danger" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="warning" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="info" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="dynamic" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="!dynamic" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
  </>
)

export const Outline = () => (
  <>
    <Alert isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="secondary" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="success" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="danger" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="warning" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="info" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="dynamic" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="!dynamic" isOutline marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
  </>
)

export const Shape = () => (
  <>
    <Alert marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert shape="rounded" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
  </>
)

export const Size = () => (
  <>
    <Alert size="small" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert size="large" marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
  </>
)

export const Soft = () => (
  <>
    <Alert isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="secondary" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="success" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="danger" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="warning" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="info" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="dynamic" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="!dynamic" isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
  </>
)

export const SoftOutline = () => (
  <>
    <Alert isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="secondary" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="success" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="danger" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="warning" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="info" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="dynamic" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
    <Alert palette="!dynamic" isOutline isSoft marginBottom="$length.3">Lorem ipsum dolor sit amet</Alert>
  </>
)
