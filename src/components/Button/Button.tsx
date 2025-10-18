import styles from './Button.module.scss';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error';
  variant: 'outlined' | 'filled';
}

function Button (props: ButtonProps) {
  const { color = 'primary', variant = 'filled', className, disabled, ...otherProps } = props;
  const buttonClassName =() => {
    const colorClassName = `button-${color}`;
    const variantClassName = `button-${variant}`;
    return `${styles.button} ${styles[colorClassName]} ${styles[variantClassName]} ${className ?? ''} ${disabled ? 'disabled' : ''}`.trim();
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