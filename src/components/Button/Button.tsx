import type { ComponentProps } from 'react';
import type { Variant } from "../../theme/types";
import styles from './Button.module.scss';

type ButtonProps = ComponentProps<'button'> & {
  color?: Variant;
}

function Button (props: ButtonProps) {
  const { color = 'primary', className, disabled, ...otherProps } = props;
  const buttonClassName =() => {
    const colorClassName = `button-${color}`;
    return `${styles.button} ${styles[colorClassName]} ${className ?? ''} ${disabled ? 'disabled' : ''}`.trim();
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