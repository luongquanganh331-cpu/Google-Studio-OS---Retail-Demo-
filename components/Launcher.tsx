
import React from 'react';
import { Search, Mic, FileText, Settings, Globe, MessageSquare, Folder, Book, Palette, ShoppingBag, Terminal, Calculator, Camera, Image, Sparkles, PlayCircle, Briefcase, Scale } from 'lucide-react';
import { AppID } from '../types';

interface LauncherProps {
  isOpen: boolean;
  onAppClick: (id: AppID, title: string) => void;
  onClose: () => void;
}

const Launcher: React.FC<LauncherProps> = ({ isOpen, onAppClick, onClose }) => {
  if (!isOpen) return null;

  const recentFiles = [
    { name: 'Kế hoạch Q4.docs', time: '10:51 SA', icon: <FileText className="text-blue-400" /> },
    { name: 'Dữ liệu Neural.sheets', time: '11:35 SA', icon: <FileText className="text-green-400" /> },
    { name: 'Hình nền v2.png', time: '11:32 SA', icon: <Image className="text-purple-400" /> },
  ];

  const apps = [
    { id: 'experience', label: 'Trải nghiệm OS', icon: <PlayCircle />, color: 'bg-indigo-700' },
    { id: 'gemini', label: 'Gemini AI', icon: <Sparkles />, color: 'bg-indigo-600' },
    { id: 'meet', label: 'So sánh OS', icon: <Scale />, color: 'bg-blue-700' },
    { id: 'browser', label: 'Trình duyệt', icon: <Globe />, color: 'bg-blue-500' },
    { id: 'work', label: 'Làm việc', icon: <Briefcase />, color: 'bg-blue-600' },
    { id: 'messages', label: 'Tin nhắn', icon: <MessageSquare />, color: 'bg-green-500' },
    { id: 'files', label: 'Tệp tin', icon: <Folder />, color: 'bg-yellow-500' },
    { id: 'notes', label: 'Ghi chú', icon: <Book />, color: 'bg-amber-400' },
    { id: 'store', label: 'Cửa hàng', icon: <ShoppingBag />, color: 'bg-pink-500' },
    { id: 'calculator', label: 'Máy tính', icon: <Calculator />, color: 'bg-green-600' },
    { id: 'camera', label: 'Máy ảnh', icon: <Camera />, color: 'bg-slate-600' },
    { id: 'settings', label: 'Cài đặt', icon: <Settings />, color: 'bg-slate-500' },
  ] as const;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-8 bg-black/40 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300" onClick={onClose}>
      <div 
        className="w-full max-w-4xl glass-dark rounded-[40px] p-10 flex flex-col gap-10 shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs">G</span>
          </div>
          <input 
            type="text" 
            autoFocus
            placeholder="Tìm kiếm ứng dụng, tệp tin và thông tin..." 
            className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-16 text-lg focus:bg-white/10 focus:border-white/20 outline-none transition-all placeholder:text-white/20"
          />
          <div className="absolute inset-y-0 right-6 flex items-center gap-4">
             <button className="text-white/40 hover:text-white transition-colors"><Mic size={20} /></button>
          </div>
        </div>

        {/* Continue Where You Left Off */}
        <div>
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Tiếp tục công việc</h3>
            <button className="text-white/20 hover:text-white transition-colors"><Settings size={14} /></button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {recentFiles.map((file, i) => (
              <div key={i} className="launcher-card rounded-2xl p-5 flex flex-col gap-4 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl">
                  {file.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold truncate">{file.name}</h4>
                  <p className="text-[10px] text-white/40 font-medium">Sửa lúc {file.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-6 gap-y-12 gap-x-4 px-4 pb-4">
          {apps.map((app) => (
            <button 
              key={app.id} 
              className="flex flex-col items-center gap-3 group"
              onClick={() => {
                onAppClick(app.id, app.label);
                onClose();
              }}
            >
              <div className={`w-16 h-16 ${app.color} rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                {React.cloneElement(app.icon as React.ReactElement, { size: 30 })}
              </div>
              <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors whitespace-nowrap">{app.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-8 w-12 h-1.5 bg-white/10 rounded-full"></div>
    </div>
  );
};

export default Launcher;
