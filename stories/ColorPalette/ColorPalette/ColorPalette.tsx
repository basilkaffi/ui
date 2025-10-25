import React from 'react';
import styles from './ColorPalette.module.scss';

export interface ColorPaletteProps {
  color: string;
  step: string;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ color, step }) => {
  console.log(color, step)
  return (
    <div className={`${styles.colorBox} ${styles[`${color}-${step}`]}`}>
      <span className={styles.colorInfo}>
        {color}-{step}
      </span>
    </div>
  );
};