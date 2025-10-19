import type { ComponentProps } from 'react';
import type { Variant } from "../../theme/types";
import styles from './Button.module.scss';

type ButtonProps = ComponentProps<'button'> & {
  variant?: Variant;
}

function Button (props: ButtonProps) {
  const { variant = 'primary', className, disabled, ...otherProps } = props;
  const buttonClassName =() => {
    const variantClassName = `button-${variant}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''} ${disabled ? 'disabled' : ''}`.trim();
  };
  return (
    <button
      className={buttonClassName()}
      disabled={disabled}
      {...otherProps}
    />
  )
}

export default Button;