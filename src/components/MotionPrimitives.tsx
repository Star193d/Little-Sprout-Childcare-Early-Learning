import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { DAYCARE_IMAGES } from '../data/daycareData';

/**
 * Full-screen blurred purple-to-pink glass page transition curtain (.curtain)
 */
interface PageCurtainProps {
  phase: 'idle' | 'in' | 'out';
}

export function PageCurtain({ phase }: PageCurtainProps) {
  const cls =
    phase === 'in'
      ? 'curtain in'
      : phase === 'out'
      ? 'curtain out'
      : 'curtain';
  return <div className={cls} aria-hidden="true" />;
}

/**
 * Splits a headline string into individual words that animate in with a spring pop.
 */
interface SplitHeadlineProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2';
}

export function SplitHeadline({
  text,
  className = '',
  as = 'h1',
}: SplitHeadlineProps) {
  const words = text.trim().split(/\s+/);
  const Tag = as;
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`}>
          <span
            className="split-word"
            aria-hidden="true"
            style={{ '--i': idx } as CSSProperties}
          >
            {word}
          </span>
          {idx < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

/**
 * Section Heading with sweeping yellow highlight and wavy pink underline (no eyebrow text).
 */
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  lightText?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  lightText = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'text-left'
      } mb-10 ${className}`}
    >
      <h2
        className={`font-heading text-3xl sm:text-4xl font-bold tracking-tight sec-highlight sec-wiggle ${
          lightText ? 'text-white' : 'text-[#2A2540]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            lightText ? 'text-white/85' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Floating ambient organic blobs from reference HTML.
 */
interface FloatingBlobsProps {
  variant?: 'hero' | 'light' | 'band';
}

export function FloatingBlobs({ variant = 'light' }: FloatingBlobsProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${
        variant === 'light' ? 'blob-light' : ''
      }`}
      aria-hidden="true"
    >
      <div className="blob b1" />
      <div className="blob b2" />
      {variant !== 'band' && <div className="blob b3" />}
    </div>
  );
}

/**
 * Curved SVG wave separator blending purple/pink sections seamlessly into the #FFF8EA cream canvas.
 */
interface WaveDividerProps {
  position?: 'bottom' | 'top';
  fill?: string;
}

export function WaveDivider({
  position = 'bottom',
  fill = '#FFF8EA',
}: WaveDividerProps) {
  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none z-10 overflow-hidden leading-none ${
        position === 'bottom' ? '-bottom-px' : '-top-px rotate-180'
      }`}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="w-full h-[54px] sm:h-[70px] block"
      >
        <path
          d="M0 40C240 0 480 70 720 36S1200 64 1440 24V70H0z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/**
 * Scroll Reveal container triggering .reveal -> .reveal.vis via IntersectionObserver.
 */
interface RevealProps {
  children: ReactNode;
  className?: string;
  delayIndex?: number;
  key?: string | number;
}

export function Reveal({
  children,
  className = '',
  delayIndex = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(delayIndex % 4) * 0.08}s` }}
      className={`reveal ${visible ? 'vis' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Reusable subpage Hero Banner with purple-to-pink gradient, Ken Burns photo wash,
 * floating blobs, split animated headline, frosted glass layout, and bottom wave divider.
 */
interface HeroMiniBannerProps {
  title: string;
  subtitle: string;
  bgImage?: string;
  children?: ReactNode;
  rightSlot?: ReactNode;
}

export function HeroMiniBanner({
  title,
  subtitle,
  bgImage = DAYCARE_IMAGES.creativePlay,
  children,
  rightSlot,
}: HeroMiniBannerProps) {
  return (
    <section className="hero-surface pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div
        className="hero-bg-photo"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <FloatingBlobs variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {rightSlot ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 glass p-7 sm:p-10 space-y-5 text-left">
              <SplitHeadline
                text={title}
                className="font-heading text-3xl sm:text-5xl font-bold text-white leading-[1.08]"
              />
              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                {subtitle}
              </p>
              {children}
            </div>
            <div className="lg:col-span-5">{rightSlot}</div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center glass p-8 sm:p-10 space-y-4">
            <SplitHeadline
              text={title}
              className="font-heading text-3xl sm:text-5xl font-bold text-white leading-[1.08]"
            />
            <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
            {children}
          </div>
        )}
      </div>

      <WaveDivider position="bottom" />
    </section>
  );
}
