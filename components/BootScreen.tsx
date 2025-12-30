
import React, { useEffect, useState } from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[2000] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a3a_0%,_#000_70%)] opacity-50"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-12 animate-in fade-in duration-1000">
        <div className="relative">
          <div className="w-32 h-32 bg-blue-600 rounded-[40px] flex items-center justify-center text-white shadow-[0_0_60px_rgba(37,99,235,0.4)] animate-pulse">
            <Sparkles size={64} />
          </div>
          <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 -z-10 animate-ping"></div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black tracking-tighter text-white">Google AI Studio <span className="text-blue-500">OS</span></h1>
          <div className="px-6 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-3">
             <ShieldAlert size={16} className="text-yellow-500" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500/90 shadow-sm">
                Phiên bản trưng bày (Retail Demo)
             </span>
          </div>
        </div>

        <div className="w-64 space-y-4">
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
             <div className="h-full bg-blue-500 transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-[8px] font-bold uppercase tracking-widest text-white/30 px-1">
             <span>Initialing Neural Core...</span>
             <span>{progress}%</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 text-[10px] font-bold text-white/10 uppercase tracking-[0.5em]">
        Integrated Intelligence v2.0
      </div>
    </div>
  );
};

export default BootScreen;
