import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

type Variant = 'primary' | 'secondary' | 'text';
type CommonProps = { children: ReactNode; variant?: Variant; className?: string };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export function Button(props: AnchorProps | ButtonProps) {
  if ('href' in props && typeof props.href === 'string') {
    const { children, variant = 'primary', className, ...anchorProps } = props;
    return (
      <a className={clsx('button', `button--${variant}`, className)} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { children, variant = 'primary', className, ...buttonProps } = props as ButtonProps;
  return (
    <button className={clsx('button', `button--${variant}`, className)} {...buttonProps}>
      {children}
    </button>
  );
}
