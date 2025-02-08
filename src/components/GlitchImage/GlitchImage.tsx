import './../../styles/styles.css';
import { IGlitchImage } from '../../types';

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
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      ))}
    </div>
  );
};

export default GlitchImage;
