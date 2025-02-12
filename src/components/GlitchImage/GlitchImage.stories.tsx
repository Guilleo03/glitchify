import { Meta, StoryObj } from '@storybook/react';
import GlitchImage from './GlitchImage';
import React from 'react';

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
      variant={'matrix'}
      image="https://arquitecturahb.com/wp-content/uploads/2019/05/008-382x1024.png"
    />
  ),
};
