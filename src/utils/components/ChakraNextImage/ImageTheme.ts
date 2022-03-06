import { type ComponentMultiStyleConfig } from '@chakra-ui/react';
import { anatomy, type PartsStyleObject } from '@chakra-ui/theme-tools';

const partsAnatomy = anatomy('image').parts('layPicture', 'layImage', 'preImage', 'preImageBlur');
export type ImageStyleObject = PartsStyleObject<typeof partsAnatomy>;

export const Image: ComponentMultiStyleConfig = {
  baseStyle: {
    layImage: {
      // layout
      display: 'inline-block'
    },
    layImageCls: {
      // layout
      display: 'block', // necessary for firefox
      inset: 0,
      position: 'absolute'
    },
    layPicture: {},
    layPictureCls: {
      // box model
      boxSizing: 'border-box',

      // misc
      contentVisibility: 'auto',

      // layout
      display: 'block',

      overflow: 'hidden',
      // necessary for firefox
      position: 'relative'
    },
    preImage: {
      // box model
      height: 'auto',
      maxWidth: 'inherit',
      width: 'auto'
      // misc
      // ! not activated because it cause jumpiness while scrolling up in Chrome
      // contentVisibility: 'auto'
      // containIntrinsicSize: 'width height' // obviously need to be adjusted
    },
    preImageBlur: {
      '--blurBackgroundPosition': '0% 0%',

      '--blurBackgroundSize': 'cover',
      // ? Passing the data uri in a css variable wasn't working in Edge/Chrome
      // ?   Instead, I inverted the flow so the theme is passing the values
      '--blurFilter': 'blur(1.25rem)'
    },
    preImageCls: {
      // box model
      maxHeight: '100%',
      maxWidth: '100%',
      minHeight: '100%',
      minWidth: '100%'
    }
  },
  defaultProps: {},
  parts: [],
  variants: {}
};
