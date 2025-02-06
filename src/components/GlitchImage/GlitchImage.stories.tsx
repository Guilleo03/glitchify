import { Meta, StoryObj } from '@storybook/react';
import GlitchImage from './GlitchImage';

const meta: Meta<typeof GlitchImage> = {
  title: 'GlitchImage',
  component: GlitchImage,
};

export default meta;

export const Default: StoryObj<typeof GlitchImage> = {
  render: () => (
    <GlitchImage
      width={'50vh'}
      height={'50vh'}
      variant={'colorful'}
      image="https://img.asmedia.epimg.net/resizer/v2/VVS4IIR6GEQXHLYXHUYRRQEQRE.jpg?auth=e3150583711c028170a198a8ce25aecd40c4a1dfe18294503ac7640e551774b2&width=1472&height=1104&focal=1906%2C17"
    />
  ),
};
