import type { ComponentProps } from 'react';
import type { Variant } from '../../theme/types';
import styles from './Typography.module.scss';

type HeadingProps = ComponentProps<'h1'> & {
  variant?: 'primary' | 'secondary';
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type ParagraphProps = ComponentProps<'p'> & {
  variant?: Variant;
}

type SmallProps = ComponentProps<'small'> & {
  variant?: Variant;
}

export function Heading(props: HeadingProps) {
  const { variant = 'primary', type, className, ...otherProps } = props;
  const headingClassName = () => {
    const variantClassName = `text-${variant}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''}`.trim();
  }
  switch(type) {
    case 'h2':
      return <h2 className={headingClassName()} {...otherProps} />
    case 'h3':
      return <h3 className={headingClassName()} {...otherProps} />
    case 'h4':
      return <h4 className={headingClassName()} {...otherProps} />
    case 'h5':
      return <h5 className={headingClassName()} {...otherProps} />
    case 'h6':
      return <h6 className={headingClassName()} {...otherProps} />
    case 'h1':
    default:
      return <h1 className={headingClassName()} {...otherProps} />
  }
}

export function Paragraph(props: ParagraphProps) {
  const { variant = 'primary', className, ...otherProps } = props;
  const paragraphClassName = () => {
    const variantClassName = `text-${variant}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''}`.trim();
  }
  return <p className={paragraphClassName()} {...otherProps} />
}

export function Small(props: SmallProps) {
  const { variant = 'primary', className, ...otherProps } = props;
  const smallClassName = () => {
    const variantClassName = `text-${variant}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''}`.trim();
  }
  return <small className={smallClassName()} {...otherProps} />
}

export function Link(props: ComponentProps<'a'>) {
  return <a {...props} />
}