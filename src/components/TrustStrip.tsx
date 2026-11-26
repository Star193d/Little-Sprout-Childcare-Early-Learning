import { Shield, BookOpen, Heart, Users } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/daycareData';
import { Reveal } from './MotionPrimitives';

export function TrustStrip() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  const getBadgeStyle = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-[#7A35E0] text-white border border-purple-200';
      case 'pink':
        return 'bg-[#F0368A] text-white border border-pink-200';
      case 'green':
        return 'bg-[#6DB93E] text-white border border-emerald-200';
      case 'blue':
        return 'bg-[#4F8FF0] text-white border border-blue-200';
      default:
        return 'bg-[#7A35E0] text-white border border-purple-200';
    }
  };

  return (
    <section id="trust-section" className="py-6 md:py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <Reveal key={item.id} delayIndex={idx}>
              <div className="glass-lt card-sprout interactive-card flex items-center gap-4 p-5 h-full">
                <div
                  className={`w-12 h-12 ico-morph flex items-center justify-center shrink-0 shadow-sm ${getBadgeStyle(
                    item.color
                  )}`}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#2A2540] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-snug font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
