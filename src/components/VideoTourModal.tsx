import { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Shield, Calendar } from 'lucide-react';
import { DAYCARE_CONFIG, DAYCARE_IMAGES } from '../data/daycareData';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTour: () => void;
}

export function VideoTourModal({ isOpen, onClose, onOpenTour }: VideoTourModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'classroom' | 'playground' | 'infants' | 'dining'>('classroom');

  if (!isOpen) return null;

  const tourScenes = {
    classroom: {
      title: 'Preschool STEM & Creative Hub',
      description: 'Bright, airy natural-light classroom with sensory tables, blocks, and a cozy reading corner.',
      img: DAYCARE_IMAGES.learningActivity,
    },
    playground: {
      title: 'Secure Padded Outdoor Discovery Garden',
      description: 'Soft turf grass, shaded play structures, and open movement spaces supervised closely by educators.',
      img: DAYCARE_IMAGES.outdoorPlay,
    },
    infants: {
      title: 'Warm Storytime & Infant Sanctuary',
      description: 'Gentle floor-mat spaces, engaging colorful picture books, and loving caregiver bonding.',
      img: DAYCARE_IMAGES.storytime,
    },
    dining: {
      title: 'Allergen-Safe Family Dining Room',
      description: 'Family-style toddler tables where children enjoy wholesome freshly prepared meals together.',
      img: DAYCARE_IMAGES.mealtime,
    },
  };

  const currentScene = tourScenes[activeTab];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2A2540]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div
        className="glass-dark step-swap relative max-w-3xl w-full p-5 sm:p-6 text-white overflow-hidden space-y-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-tour-title"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 ico-morph bg-[#F0368A] flex items-center justify-center border border-white/40">
              <Play className="w-4 h-4 fill-white ml-0.5" />
            </div>
            <div>
              <h2 id="video-tour-title" className="font-heading text-base sm:text-lg font-bold tracking-tight">
                Virtual Video Walkthrough — {DAYCARE_CONFIG.name}
              </h2>
              <p className="text-[11px] text-white/75">
                Experience our welcoming classrooms, safe outdoor spaces, and gentle daily rhythms.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/75 hover:text-white hover:bg-white/15 border border-transparent hover:border-white/30 transition-colors cursor-pointer"
            aria-label="Close video tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-[#2A2540] border border-white/25 shadow-xl group">
          <img
            key={activeTab}
            src={currentScene.img}
            alt={currentScene.title}
            className={`w-full h-full object-cover transition-transform duration-1000 step-swap ${
              isPlaying ? 'scale-105 brightness-95' : 'scale-100 brightness-75'
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2A2540]/90 via-transparent to-[#2A2540]/35 p-4 sm:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold bg-[#7A35E0]/90 border border-white/30 text-white px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFC81E] animate-ping" />
                TOUR SCENE: {activeTab.toUpperCase()}
              </span>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full bg-[#2A2540]/60 hover:bg-[#2A2540]/90 border border-white/30 text-white transition-colors cursor-pointer"
                title={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                    {currentScene.title}
                  </h3>
                  <p className="text-xs text-white/85 max-w-lg leading-snug">
                    {currentScene.description}
                  </p>
                </div>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-[#FFC81E] text-[#2A2540] border-2 border-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shrink-0 shadow-lg"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-[#2A2540]" /> : <Play className="w-5 h-5 fill-[#2A2540] ml-0.5" />}
                </button>
              </div>

              <div className="w-full bg-white/25 h-1.5 rounded-full overflow-hidden">
                <div className={`h-full bg-[#FFC81E] rounded-full ${isPlaying ? 'w-3/4 animate-pulse' : 'w-1/2'}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          <button
            onClick={() => setActiveTab('classroom')}
            className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeTab === 'classroom'
                ? 'bg-[#7A35E0] border-white text-white font-bold'
                : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
            }`}
          >
            <span className="text-xs block leading-tight">1. STEM Classroom</span>
            <span className="text-[10px] text-white/70 block mt-0.5">Ages 3–5 Years</span>
          </button>

          <button
            onClick={() => setActiveTab('playground')}
            className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeTab === 'playground'
                ? 'bg-[#7A35E0] border-white text-white font-bold'
                : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
            }`}
          >
            <span className="text-xs block leading-tight">2. Outdoor Garden</span>
            <span className="text-[10px] text-white/70 block mt-0.5">Padded Play Zone</span>
          </button>

          <button
            onClick={() => setActiveTab('infants')}
            className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeTab === 'infants'
                ? 'bg-[#7A35E0] border-white text-white font-bold'
                : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
            }`}
          >
            <span className="text-xs block leading-tight">3. Story &amp; Nurseries</span>
            <span className="text-[10px] text-white/70 block mt-0.5">Calm &amp; Nurturing</span>
          </button>

          <button
            onClick={() => setActiveTab('dining')}
            className={`p-2.5 rounded-2xl text-left border transition-all cursor-pointer ${
              activeTab === 'dining'
                ? 'bg-[#7A35E0] border-white text-white font-bold'
                : 'bg-white/10 border-white/20 text-white/80 hover:bg-white/15'
            }`}
          >
            <span className="text-xs block leading-tight">4. Healthy Dining</span>
            <span className="text-[10px] text-white/70 block mt-0.5">Allergen Safe</span>
          </button>
        </div>

        <div className="pt-3 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/80">
            <Shield className="w-4 h-4 text-[#6DB93E]" />
            <span>Schedule an in-person walkthrough anytime during center hours.</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenTour();
            }}
            className="btn-sprout-yel w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Personal In-Person Tour</span>
          </button>
        </div>
      </div>
    </div>
  );
}
