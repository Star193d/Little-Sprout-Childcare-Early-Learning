import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/daycareData';

interface GalleryModalProps {
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export function GalleryModal({ isOpen, initialIndex = 0, onClose }: GalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  if (!isOpen) return null;

  const currentItem = GALLERY_ITEMS[currentIndex] || GALLERY_ITEMS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2540]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        className="glass-dark step-swap relative max-w-3xl w-full p-5 sm:p-6 text-white overflow-hidden space-y-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-title"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 ico-morph bg-[#7A35E0] flex items-center justify-center border border-white/40">
              <Camera className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 id="gallery-title" className="font-heading text-base sm:text-lg font-bold tracking-tight">
                A Day at Sunny Days Learning — Activity Gallery
              </h2>
              <p className="text-[11px] text-white/75">
                Photo {currentIndex + 1} of {GALLERY_ITEMS.length} • {currentItem.category}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/75 hover:text-white hover:bg-white/15 border border-transparent hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-[#2A2540] border border-white/25 shadow-xl group flex items-center justify-center">
          <img
            key={currentItem.id}
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="w-full h-full object-cover step-swap"
          />

          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#2A2540] border border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-[#2A2540] border border-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2A2540]/95 via-[#2A2540]/55 to-transparent p-4 sm:p-5">
            <h3 className="font-heading font-bold text-sm sm:text-base text-white">
              {currentItem.title}{' '}
              <span className="text-xs text-[#FFC81E] font-sans font-semibold ml-2">
                ({currentItem.category})
              </span>
            </h3>
            <p className="text-xs text-white/85 mt-0.5 leading-relaxed">
              {currentItem.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {GALLERY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-xl overflow-hidden aspect-16/10 relative border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#FFC81E] ring-2 ring-[#FFC81E]/50 scale-102'
                  : 'border-white/25 opacity-65 hover:opacity-100'
              }`}
            >
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
