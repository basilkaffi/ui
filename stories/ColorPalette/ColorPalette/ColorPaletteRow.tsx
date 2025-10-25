import React from 'react';
import styles from './ColorPaletteRow.module.scss';
import { ColorPalette } from './ColorPalette';

export interface ColorPaletteRowProps {
  color: string;
}

export const ColorPaletteRow: React.FC<ColorPaletteRowProps> = ({ color }) => {
  const steps = ['00', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

  return (
    <div className={styles.row}>
      <div className={styles.colorName}>{color}</div>
      <div className={styles.palette}>
        {steps.map((step) => (
          <ColorPalette key={`${color}-${step}`} color={color} step={step} />
        ))}
      </div>
    </div>
  );
};