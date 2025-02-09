import './../../styles/styles.css';
import { IGlitchImage } from '../../types';
import React from 'react';

const GlitchImage = ({
  width,
  height,
  image,
  variant = 'classic',
  alt = '',
  className = '',
  intensity = 5,
  direction = 'horizontal',
}: IGlitchImage) => {
  const imageSrc = typeof image === 'string' ? image : image.src;

  const classes = [
    'glitch',
    `glitch-style-${variant}`,
    direction === 'vertical' && 'glitch--vertical',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const getStyle = (i: number) => {
    if (i === 0) {
      return {
        backgroundImage: `url(${imageSrc})`,
      };
    }

    return {
      maskImage: `url(${imageSrc})`,
    };
  };

  return (
    <div
      className={classes}
      style={
        {
          '--time-anim': `${intensity}s`,
          width,
          height,
        } as React.CSSProperties
      }
      role="img"
      aria-label={alt}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="glitch-img"
          style={getStyle(i)}
        />
      ))}
    </div>
  );
};

export default GlitchImage;
