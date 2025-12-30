
import React from 'react';
import { Box, Layers, Palette, Cpu, Play, RotateCcw, Cuboid as Cube } from 'lucide-react';

const Vision3DApp: React.FC = () => {
  return (
    <div className="h-full flex bg-[#121212] text-white">
      {/* Tools Sidebar */}
      <div className="w-16 border-r border-white/10 flex flex-col items-center py-6 gap-6">
         <ToolIcon icon={<Layers />} active={false} />
         <ToolIcon icon={<Cube />} active={true} />
         <ToolIcon icon={<Palette />} active={false} />
         <ToolIcon icon={<Cpu />} active={false} />
         <div className="mt-auto">
            <ToolIcon icon={<RotateCcw />} active={false} />
         </div>
      </div>

      {/* Main Viewport */}
      <div className="flex-1 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#2a2a2a_0%,_#121212_100%)]">
         {/* 3D Grid */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-200px)'
         }}></div>

         {/* Simulated 3D Object */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48 group">
               {/* Animated Glowing Cube Frame */}
               <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.5)]"></div>
               <div className="absolute inset-4 border border-blue-400/30 rounded-xl rotate-45 animate-spin duration-[10s]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <Box size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
               </div>
            </div>
         </div>

         {/* UI Overlays */}
         <div className="absolute top-6 left-6 px-4 py-2 glass-dark rounded-xl text-xs font-bold tracking-widest uppercase">
            Viewport: Perspective
         </div>
         <div className="absolute top-6 right-6 flex gap-2">
            <button className="px-4 py-2 bg-blue-600 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors">
               <Play size={14} /> Render Stage
            </button>
         </div>
         
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-dark px-8 py-3 rounded-2xl flex gap-12 text-[10px] font-bold tracking-widest uppercase opacity-60">
            <span>X: 1.024</span>
            <span>Y: -0.452</span>
            <span>Z: 2.190</span>
         </div>
      </div>

      {/* Properties Panel */}
      <div className="w-72 border-l border-white/10 flex flex-col">
         <div className="p-6 border-b border-white/10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Object Properties</h3>
         </div>
         <div className="p-6 space-y-6 flex-1 overflow-auto">
            <PropertyControl label="Translation" values={['0.0', '1.5', '0.0']} />
            <PropertyControl label="Rotation" values={['45°', '0°', '12°']} />
            <PropertyControl label="Scale" values={['1.0', '1.0', '1.0']} />
            
            <div className="pt-6 border-t border-white/10">
               <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase">Material API</h4>
               <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white/20"></div>
                  <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white/20"></div>
                  <div className="w-10 h-10 rounded-full bg-yellow-500 border-2 border-white/20"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center">+</div>
               </div>
            </div>
         </div>
         <div className="p-6 bg-white/5 border-t border-white/10">
            <div className="flex items-center gap-2 text-blue-400">
               <Cpu size={14} />
               <span className="text-[10px] font-bold uppercase">NPU Accelerating</span>
            </div>
         </div>
      </div>
    </div>
  );
};

const ToolIcon: React.FC<{ icon: React.ReactNode, active: boolean }> = ({ icon, active }) => (
   <button className={`p-3 rounded-xl transition-all ${active ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
   </button>
);

const PropertyControl: React.FC<{ label: string, values: string[] }> = ({ label, values }) => (
   <div className="space-y-3">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>
      <div className="flex gap-2">
         {values.map((v, i) => (
            <div key={i} className="flex-1 bg-white/5 rounded-lg border border-white/10 p-2 text-center text-xs font-mono">
               {v}
            </div>
         ))}
      </div>
   </div>
);

export default Vision3DApp;
