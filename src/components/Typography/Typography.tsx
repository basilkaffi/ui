import type { ComponentProps } from 'react';
import type { Variant } from '../../theme/types';
import styles from './Typography.module.scss';

type HeadingProps = ComponentProps<'h1'> & {
  color?: 'primary' | 'secondary';
  variant?: '1' | '2' | '3' | '4' | '5' | '6';
}

type ParagraphProps = ComponentProps<'p'> & {
  color?: Variant;
}

type SmallProps = ComponentProps<'small'> & {
  color?: Variant;
}

export function Heading(props: HeadingProps) {
  const { color = 'primary', variant, className, ...otherProps } = props;
  const headingClassName = () => {
    const variantClassName = `text-${color}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''}`.trim();
  }
  switch(variant) {
    case '2':
      return <h2 className={headingClassName()} {...otherProps} />
    case '3':
      return <h3 className={headingClassName()} {...otherProps} />
    case '4':
      return <h4 className={headingClassName()} {...otherProps} />
    case '5':
      return <h5 className={headingClassName()} {...otherProps} />
    case '6':
      return <h6 className={headingClassName()} {...otherProps} />
    case '1':
    default:
      return <h1 className={headingClassName()} {...otherProps} />
  }
}

export function Paragraph(props: ParagraphProps) {
  const { color = 'primary', className, ...otherProps } = props;
  const paragraphClassName = () => {
    const variantClassName = `text-${color}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''}`.trim();
  }
  return <p className={paragraphClassName()} {...otherProps} />
}

export function Small(props: SmallProps) {
  const { color = 'primary', className, ...otherProps } = props;
  const smallClassName = () => {
    const variantClassName = `text-${color}`;
    return `${styles.button} ${styles[variantClassName]} ${className ?? ''}`.trim();
  }
  return <small className={smallClassName()} {...otherProps} />
}

export function Link(props: ComponentProps<'a'>) {
  return <a {...props} />
}