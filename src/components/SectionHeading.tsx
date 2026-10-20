import type { ReactNode } from 'react';
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  children,
  id,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} reveal`} id={id}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}
