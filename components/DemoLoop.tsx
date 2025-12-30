
import React, { useEffect, useState } from 'react';
import { Sparkles, BrainCircuit, Globe, Zap } from 'lucide-react';

interface DemoLoopProps {
  onDismiss: () => void;
}

const DemoLoop: React.FC<DemoLoopProps> = ({ onDismiss }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <BrainCircuit size={80} className="text-blue-400" />,
      title: "Built with Gemini",
      desc: "The world's first AI-native operating system."
    },
    {
      icon: <Globe size={80} className="text-purple-400" />,
      title: "Global Collaboration",
      desc: "Meet, Create, and Build across any border."
    },
    {
      icon: <Zap size={80} className="text-yellow-400" />,
      title: "Lightning Performance",
      desc: "Optimized for speed and fluid interactions."
    },
    {
      icon: <Sparkles size={80} className="text-green-400" />,
      title: "Studio OS",
      desc: "Touch to experience the future."
    }
  ];

  return (
    <div 
      className="absolute inset-0 z-[500] bg-black flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={onDismiss}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-blue-900/20 via-purple-900/20 to-black rounded-full blur-[100px] transition-all duration-1000 rotate-${stage * 90}`}></div>
      </div>

      <div className="relative z-10 text-center animate-in fade-in zoom-in duration-1000">
        <div className="mb-12 flex justify-center animate-bounce-subtle">
           {features[stage].icon}
        </div>
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          {features[stage].title}
        </h1>
        <p className="text-2xl text-blue-200/60 font-medium">
          {features[stage].desc}
        </p>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-[0.3em] uppercase animate-pulse">
        Touch Anywhere to Start
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {features.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${stage === i ? 'w-12 bg-blue-400' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DemoLoop;
