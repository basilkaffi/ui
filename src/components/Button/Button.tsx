import styles from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error';
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