
import React, { useEffect, useRef, useState } from 'react';
import { Camera, RefreshCw, Circle, Zap, ImageIcon } from 'lucide-react';

const CameraApp: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Camera permission required for Studio Neural Optics.");
      }
    }
    setupCamera();
    return () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="h-full bg-black flex flex-col items-center justify-center p-8">
      <div className="relative w-full max-w-2xl aspect-[4/3] rounded-[40px] overflow-hidden bg-white/5 shadow-2xl border border-white/10">
        {error ? (
          <div className="h-full flex flex-col items-center justify-center gap-4 text-center p-12">
             <Camera size={48} className="text-white/10" />
             <p className="text-white/40 font-medium">{error}</p>
          </div>
        ) : (
          <>
            <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover grayscale opacity-60" />
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-2xl"></div>
               <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-2xl"></div>
               <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-2xl"></div>
               <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-2xl"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white/20 rounded-full"></div>
               </div>
            </div>
            <div className="absolute top-6 left-6 px-4 py-1 glass-dark rounded-full text-[10px] font-bold text-white/50 tracking-widest flex items-center gap-2">
               <Zap size={10} fill="currentColor" /> AI ENHANCED VISION
            </div>
          </>
        )}
      </div>

      <div className="mt-12 flex items-center gap-12">
         <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 transition-all"><ImageIcon size={20} /></button>
         <button className="w-24 h-24 rounded-full border-4 border-white/10 p-1 group transition-all active:scale-95">
            <div className="w-full h-full rounded-full bg-white group-hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"></div>
         </button>
         <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-white/10 transition-all"><RefreshCw size={20} /></button>
      </div>
    </div>
  );
};

export default CameraApp;
