import React from 'react';

type GlitchImageType = string | {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};
interface IGlitchImage {
    image: GlitchImageType;
    height: string | number;
    width: string | number;
    variant?: 'classic' | 'matrix' | 'wave' | 'colorful' | 'crazy' | 'light';
    alt?: string;
    className?: string;
    intensity?: number;
    direction?: 'horizontal' | 'vertical';
    obkectFit?: 'cover' | 'contain';
}

declare const GlitchImage: ({ width, height, image, variant, alt, className, intensity, direction, obkectFit, }: IGlitchImage) => React.JSX.Element;

export { GlitchImage, type IGlitchImage };
