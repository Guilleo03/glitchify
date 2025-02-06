import { HTMLAttributes } from 'react';

export type GlitchImageType =
  | string
  | { src: string; height: number; width: number; blurDataURL?: string };

export interface IGlitchImage extends HTMLAttributes<HTMLDivElement> {
  image: GlitchImageType;
  height: string | number;
  width: string | number;
  variant?: 'classic' | 'matrix' | 'wave' | 'colorful' | 'crazy' | 'light';
  alt?: string;
  className?: string;
  intensity?: number;
  direction?: 'horizontal' | 'vertical';
}
