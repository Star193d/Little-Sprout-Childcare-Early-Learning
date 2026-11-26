import { CSSProperties } from 'react';

export type HandprintColor =
  | 'yellow'
  | 'orange'
  | 'pink'
  | 'teal'
  | 'purple';

const HANDPRINT_PALETTE: Record<
  HandprintColor,
  { main: string; highlight: string }
> = {
  yellow: { main: '#FFD700', highlight: '#F5C55A' },
  orange: { main: '#E87A3A', highlight: '#FF8E47' },
  pink: { main: '#FF69B4', highlight: '#F0368A' },
  teal: { main: '#00B88A', highlight: '#00CED1' },
  purple: { main: '#8A2BE2', highlight: '#7A35E0' },
};

/**
 * Shared SVG paint-roughness & crayon-texture filters mounted once at app root
 * so every PaintedHandprint across all pages shares crisp tempera-paint ridges.
 */
export function HandprintSvgDefs() {
  return (
    <svg
      width="0"
      height="0"
      className="absolute w-0 h-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <filter
          id="tempera-handprint-texture"
          x="-12%"
          y="-12%"
          width="124%"
          height="124%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.065"
            numOctaves="3"
            seed="11"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3.2"
            xChannelSelector="R"
            yChannelSelector="G"
            result="roughened"
          />
        </filter>

        <filter
          id="crayon-doodle-texture"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.18"
            numOctaves="2"
            seed="4"
            result="grain"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="grain"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

interface PaintedHandprintProps {
  color?: HandprintColor;
  size?: number;
  rotate?: number;
  mirror?: boolean;
  opacity?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Authentic child painted handprint SVG with organic finger-paint ridges,
 * separated toddler finger pads, and natural hollow palm crease cutouts.
 */
export function PaintedHandprint({
  color = 'yellow',
  size = 110,
  rotate = 0,
  mirror = false,
  opacity = 0.85,
  className = '',
  style,
}: PaintedHandprintProps) {
  const palette = HANDPRINT_PALETTE[color];
  const scaleX = mirror ? -1 : 1;

  return (
    <svg
      viewBox="0 0 200 220"
      width={size}
      height={Math.round(size * 1.1)}
      className={`pointer-events-none select-none ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotate}deg) scaleX(${scaleX})`,
        ...style,
      }}
      aria-hidden="true"
    >
      <g filter="url(#tempera-handprint-texture)">
        {/* Finger 1: Pinky (far left) */}
        <path
          d="M34 95 C27 81 23 68 27 61 C31 55 39 58 43 68 C46 76 47 86 43 96 Z"
          fill={palette.main}
        />
        <ellipse cx="42" cy="102" rx="6.5" ry="7.5" transform="rotate(-14 42 102)" fill={palette.highlight} opacity="0.88" />

        {/* Finger 2: Ring finger */}
        <path
          d="M54 74 C49 54 47 36 53 31 C59 26 67 31 69 44 C71 57 70 70 64 78 Z"
          fill={palette.main}
        />
        <ellipse cx="62" cy="86" rx="7.5" ry="8.5" transform="rotate(-7 62 86)" fill={palette.highlight} opacity="0.9" />

        {/* Finger 3: Middle finger (tallest) */}
        <path
          d="M84 62 C82 40 82 20 89 16 C97 12 104 19 105 33 C106 48 103 61 97 69 Z"
          fill={palette.main}
        />
        <ellipse cx="93" cy="77" rx="8" ry="8.5" fill={palette.highlight} opacity="0.92" />

        {/* Finger 4: Index finger */}
        <path
          d="M116 70 C118 49 122 30 130 28 C138 26 143 34 140 48 C138 61 133 73 126 80 Z"
          fill={palette.main}
        />
        <ellipse cx="122" cy="88" rx="8" ry="8.5" transform="rotate(10 122 88)" fill={palette.highlight} opacity="0.9" />

        {/* Finger 5: Splayed toddler thumb (far right) */}
        <path
          d="M142 128 C154 114 169 102 178 105 C186 108 185 119 175 129 C165 139 152 145 142 143 Z"
          fill={palette.main}
        />
        <ellipse cx="141" cy="139" rx="7.5" ry="7" transform="rotate(24 141 139)" fill={palette.highlight} opacity="0.85" />

        {/* Main organic painted palm with natural paint-lift hollow cutouts */}
        <path
          fillRule="evenodd"
          fill={palette.main}
          d="
            M50 108
            C62 96 79 90 100 91
            C120 92 135 101 142 117
            C147 129 144 146 138 161
            C132 176 123 190 107 195
            C91 200 73 196 61 186
            C49 175 43 158 43 141
            C43 126 44 116 50 108 Z
            M82 134
            C74 139 73 152 80 158
            C87 163 97 159 101 151
            C105 143 102 132 94 130
            C89 129 85 131 82 134 Z
            M111 145
            C107 149 108 156 113 158
            C118 160 122 155 121 150
            C120 145 115 142 111 145 Z
          "
        />

        {/* Secondary subtle textured paint press blotch along heel of palm */}
        <path
          d="M57 158 C65 178 83 189 104 186 C119 183 128 169 131 153 C121 169 107 175 91 174 C76 173 64 166 57 158 Z"
          fill={palette.highlight}
          opacity="0.72"
        />
      </g>
    </svg>
  );
}

interface DoodleAccentProps {
  kind?: 'heart' | 'stroke';
  color?: string;
  size?: number;
  rotate?: number;
  opacity?: number;
  className?: string;
}

/**
 * Hand-drawn crayon/marker heart and confetti paint dash strokes
 * matching the playful scrapbook overlays in the reference image.
 */
export function HandprintDoodle({
  kind = 'heart',
  color = '#F0368A',
  size = 38,
  rotate = 0,
  opacity = 0.72,
  className = '',
}: DoodleAccentProps) {
  if (kind === 'stroke') {
    return (
      <svg
        viewBox="0 0 32 48"
        width={Math.round(size * 0.65)}
        height={size}
        className={`pointer-events-none select-none ${className}`}
        style={{ opacity, transform: `rotate(${rotate}deg)` }}
        aria-hidden="true"
      >
        <path
          d="M19 6 C16 18 13 30 10 42"
          fill="none"
          stroke={color}
          strokeWidth="5.5"
          strokeLinecap="round"
          filter="url(#crayon-doodle-texture)"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 60"
      width={size}
      height={Math.round(size * 0.94)}
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity, transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M32 50 C20 40 9 30 10 19 C11 11 19 8 26 12 C29 14 31 17 32 20 C33 17 36 13 40 11 C47 8 54 12 54 20 C54 31 43 41 32 50 Z"
        fill="none"
        stroke={color}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#crayon-doodle-texture)"
      />
    </svg>
  );
}

interface PaintedHandprintsLayerProps {
  variant?: 'hero' | 'light' | 'band' | 'corner';
}

/**
 * Curated placement presets of children's painted handprints & doodle strokes
 * tailored for hero gradients, light cream sections, pink/navy bands, and footer/CTA corners.
 */
export function PaintedHandprintsLayer({
  variant = 'light',
}: PaintedHandprintsLayerProps) {
  if (variant === 'hero') {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
        aria-hidden="true"
      >
        {/* Top-left yellow child handprint */}
        <div className="absolute -top-4 left-[3%] sm:left-[5%] handprint-float">
          <PaintedHandprint color="yellow" size={92} rotate={-16} opacity={0.42} />
        </div>

        {/* Left-mid orange child handprint + coral heart */}
        <div
          className="hidden md:block absolute top-[34%] -left-5 handprint-float"
          style={{ animationDelay: '-3s' }}
        >
          <PaintedHandprint color="orange" size={88} rotate={24} mirror opacity={0.4} />
        </div>
        <div className="hidden lg:block absolute top-[23%] left-[2%] handprint-float" style={{ animationDelay: '-1.5s' }}>
          <HandprintDoodle kind="heart" color="#FF69B4" size={30} rotate={-12} opacity={0.55} />
        </div>

        {/* Bottom-left teal handprint */}
        <div
          className="absolute bottom-8 left-[6%] sm:left-[10%] handprint-float"
          style={{ animationDelay: '-5s' }}
        >
          <PaintedHandprint color="teal" size={82} rotate={-12} opacity={0.38} />
        </div>

        {/* Top-right orange & yellow handprints */}
        <div
          className="absolute top-6 right-[3%] sm:right-[7%] handprint-float"
          style={{ animationDelay: '-2s' }}
        >
          <PaintedHandprint color="orange" size={84} rotate={-22} opacity={0.38} />
        </div>
        <div className="hidden md:block absolute top-[18%] right-[16%] handprint-float" style={{ animationDelay: '-4s' }}>
          <HandprintDoodle kind="stroke" color="#00CED1" size={32} rotate={18} opacity={0.58} />
        </div>

        {/* Right-mid pink handprint */}
        <div
          className="hidden sm:block absolute top-[46%] -right-4 handprint-float"
          style={{ animationDelay: '-6s' }}
        >
          <PaintedHandprint color="pink" size={94} rotate={-28} mirror opacity={0.44} />
        </div>

        {/* Bottom-right purple & yellow handprints */}
        <div
          className="absolute bottom-10 right-[7%] sm:right-[12%] handprint-float"
          style={{ animationDelay: '-4.2s' }}
        >
          <PaintedHandprint color="yellow" size={78} rotate={18} mirror opacity={0.38} />
        </div>
        <div className="hidden lg:block absolute bottom-16 left-[46%] handprint-float" style={{ animationDelay: '-2.6s' }}>
          <HandprintDoodle kind="heart" color="#FFD700" size={28} rotate={14} opacity={0.52} />
        </div>
      </div>
    );
  }

  if (variant === 'band') {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
        aria-hidden="true"
      >
        <div className="absolute top-6 left-[3%] handprint-float">
          <PaintedHandprint color="yellow" size={88} rotate={-18} opacity={0.42} />
        </div>
        <div
          className="hidden sm:block absolute bottom-10 left-[8%] handprint-float"
          style={{ animationDelay: '-3.5s' }}
        >
          <PaintedHandprint color="teal" size={76} rotate={20} mirror opacity={0.36} />
        </div>
        <div
          className="absolute top-10 right-[4%] handprint-float"
          style={{ animationDelay: '-2s' }}
        >
          <PaintedHandprint color="orange" size={84} rotate={22} mirror opacity={0.38} />
        </div>
        <div
          className="hidden md:block absolute bottom-8 right-[6%] handprint-float"
          style={{ animationDelay: '-5.2s' }}
        >
          <PaintedHandprint color="purple" size={82} rotate={-14} opacity={0.42} />
        </div>
        <div className="hidden lg:block absolute top-[48%] right-[14%] handprint-float" style={{ animationDelay: '-1.8s' }}>
          <HandprintDoodle kind="heart" color="#FFD700" size={30} rotate={-10} opacity={0.5} />
        </div>
      </div>
    );
  }

  if (variant === 'corner') {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
        aria-hidden="true"
      >
        <div className="absolute -top-4 right-8 sm:right-14 handprint-float opacity-90">
          <PaintedHandprint color="pink" size={66} rotate={18} opacity={0.26} />
        </div>
        <div
          className="hidden sm:block absolute -bottom-4 left-10 handprint-float"
          style={{ animationDelay: '-3.2s' }}
        >
          <PaintedHandprint color="teal" size={64} rotate={-18} mirror opacity={0.24} />
        </div>
        <div
          className="hidden md:block absolute top-4 left-[36%] handprint-float"
          style={{ animationDelay: '-1.5s' }}
        >
          <HandprintDoodle kind="heart" color="#E87A3A" size={24} rotate={12} opacity={0.32} />
        </div>
      </div>
    );
  }

  // Default: 'light' — subtle vivid painted child handprints framing cream #FFF8EA sections
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="absolute top-8 left-[1.5%] sm:left-[3%] handprint-float">
        <PaintedHandprint color="yellow" size={86} rotate={-20} opacity={0.34} />
      </div>
      <div
        className="hidden md:block absolute top-[45%] left-[1%] handprint-float"
        style={{ animationDelay: '-4s' }}
      >
        <PaintedHandprint color="pink" size={76} rotate={18} mirror opacity={0.28} />
      </div>
      <div
        className="absolute bottom-8 left-[4%] handprint-float"
        style={{ animationDelay: '-2.5s' }}
      >
        <PaintedHandprint color="teal" size={74} rotate={-10} opacity={0.28} />
      </div>

      <div
        className="absolute top-12 right-[2%] sm:right-[3.5%] handprint-float"
        style={{ animationDelay: '-3.2s' }}
      >
        <PaintedHandprint color="orange" size={84} rotate={16} mirror opacity={0.32} />
      </div>
      <div
        className="hidden md:block absolute bottom-10 right-[3%] handprint-float"
        style={{ animationDelay: '-5.5s' }}
      >
        <PaintedHandprint color="purple" size={80} rotate={-18} opacity={0.28} />
      </div>
      <div
        className="hidden lg:block absolute top-[28%] right-[6%] handprint-float"
        style={{ animationDelay: '-1.2s' }}
      >
        <HandprintDoodle kind="heart" color="#E87A3A" size={26} rotate={14} opacity={0.35} />
      </div>
      <div
        className="hidden lg:block absolute bottom-[28%] left-[7%] handprint-float"
        style={{ animationDelay: '-4.4s' }}
      >
        <HandprintDoodle kind="stroke" color="#00B88A" size={28} rotate={-22} opacity={0.35} />
      </div>
    </div>
  );
}
