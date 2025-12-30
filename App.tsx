
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Settings, 
  Layout, 
  Box, 
  PlayCircle, 
  Video, 
  Briefcase, 
  Maximize2, 
  Minimize2, 
  X, 
  Wifi, 
  Battery, 
  Volume2, 
  Grid,
  Bluetooth,
  Moon,
  Camera as CameraIcon,
  Accessibility,
  Cloud,
  LogOut,
  ChevronRight,
  Sun,
  Globe,
  Folder,
  Image as ImageIcon,
  Sparkles,
  MessageSquare,
  Book,
  Calculator as CalcIcon,
  ShoppingBag,
  Scale,
  ShieldAlert,
  Info,
  UserCheck
} from 'lucide-react';
import { AppID, WindowState } from './types';

// Apps
import WorkSuiteApp from './apps/WorkSuiteApp';
import Vision3DApp from './apps/Vision3DApp';
import MeetApp from './apps/MeetApp';
import SettingsApp from './apps/SettingsApp';
import ExperienceApp from './apps/ExperienceApp';
import DemoLoop from './components/DemoLoop';
import LockScreen from './components/LockScreen';
import Launcher from './components/Launcher';
import GeminiApp from './apps/GeminiApp';
import CalculatorApp from './apps/CalculatorApp';
import StoreApp from './apps/StoreApp';
import CameraApp from './apps/CameraApp';
import MessagesApp from './apps/MessagesApp';
import FilesApp from './apps/FilesApp';
import NotesApp from './apps/NotesApp';
import BrowserApp from './apps/BrowserApp';
import BootScreen from './components/BootScreen';

const IDLE_TIMEOUT = 300000; // 5 minutes

const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [isLocked, setIsLocked] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  const [isTabletMode, setIsTabletMode] = useState(false);
  const [isDemoLoopActive, setIsDemoLoopActive] = useState(false);
  const [isControlCenterOpen, setIsControlCenterOpen] = useState(false);
  const [activeWindows, setActiveWindows] = useState<WindowState[]>([]);
  const [topZIndex, setTopZIndex] = useState(10);
  
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetIdleTimer = useCallback(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (isDemoLoopActive) setIsDemoLoopActive(false);
    
    idleTimerRef.current = setTimeout(() => {
      if (!isLocked && !isBooting) setIsDemoLoopActive(true);
    }, IDLE_TIMEOUT);
  }, [isDemoLoopActive, isLocked, isBooting]);

  useEffect(() => {
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('mousedown', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    resetIdleTimer();
    return () => {
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('mousedown', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
    };
  }, [resetIdleTimer]);

  const toggleApp = (id: AppID, title: string) => {
    const existing = activeWindows.find(w => w.id === id);
    if (existing) {
      if (existing.isMinimized) {
        updateWindow(id, { isMinimized: false, zIndex: topZIndex + 1, isMaximized: isTabletMode || existing.isMaximized });
        setTopZIndex(prev => prev + 1);
      } else {
        updateWindow(id, { zIndex: topZIndex + 1 });
        setTopZIndex(prev => prev + 1);
      }
      return;
    }

    const newWindow: WindowState = {
      id,
      title,
      isOpen: true,
      isMinimized: false,
      isMaximized: isTabletMode,
      zIndex: topZIndex + 1
    };
    setActiveWindows(prev => [...prev, newWindow]);
    setTopZIndex(prev => prev + 1);
  };

  const closeWindow = (id: AppID) => {
    setActiveWindows(prev => prev.filter(w => w.id !== id));
  };

  const updateWindow = (id: AppID, updates: Partial<WindowState>) => {
    setActiveWindows(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w));
  };

  const handleUnlock = (adminStatus: boolean, user?: string) => {
    setIsAdmin(adminStatus);
    setUsername(user || null);
    setIsLocked(false);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setUsername(null);
    setIsLocked(true);
  };

  const renderAppContent = (id: AppID) => {
    switch (id) {
      case 'work': return <WorkSuiteApp />;
      case 'vision': return <Vision3DApp />;
      case 'meet': return <MeetApp />;
      case 'settings': return (
        <SettingsApp 
          isTabletMode={isTabletMode} 
          setIsTabletMode={setIsTabletMode} 
          isAdmin={isAdmin} 
          username={username}
          onAdminRequest={() => setIsLocked(true)}
        />
      );
      case 'experience': return <ExperienceApp />;
      case 'gemini': return <GeminiApp />;
      case 'calculator': return <CalculatorApp />;
      case 'store': return <StoreApp />;
      case 'camera': return <CameraApp />;
      case 'messages': return <MessagesApp />;
      case 'files': return <FilesApp />;
      case 'notes': return <NotesApp />;
      case 'browser': return <BrowserApp />;
      default: return <div className="h-full flex items-center justify-center text-white/20 font-bold uppercase tracking-widest bg-black">{id} is coming soon</div>;
    }
  };

  if (isBooting) return <BootScreen onComplete={() => setIsBooting(false)} />;
  if (isLocked) return <LockScreen onUnlock={handleUnlock} />;

  return (
    <div className={`relative w-screen h-screen overflow-hidden transition-colors duration-1000 bg-[#020205]`}>
      {!isDemoLoopActive && (
         <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-900/40 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-900/30 blur-[100px] rounded-full animate-pulse [animation-delay:3s]"></div>
            <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] bg-purple-900/20 blur-[100px] rounded-full animate-pulse [animation-delay:5s]"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         </div>
      )}

      {isDemoLoopActive && <DemoLoop onDismiss={() => setIsDemoLoopActive(false)} />}

      {!isDemoLoopActive && (
        <>
          <div className="absolute inset-0 z-20 pointer-events-none p-4 pb-24">
            {activeWindows.filter(w => !w.isMinimized).map(win => (
              <div 
                key={win.id}
                className={`absolute pointer-events-auto transition-all duration-500 shadow-2xl rounded-[32px] overflow-hidden glass-dark ${win.isMaximized ? 'inset-0 m-0 rounded-none' : 'w-[85%] h-[80%] top-[8%] left-[7.5%]'}`}
                style={{ zIndex: win.zIndex }}
                onClick={() => {
                   updateWindow(win.id, { zIndex: topZIndex + 1 });
                   setTopZIndex(prev => prev + 1);
                }}
              >
                <div className={`h-14 flex items-center justify-between px-6 border-b border-white/5 bg-white/5`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-white/80">{win.title}</span>
                  </div>
                  {!isTabletMode ? (
                    <div className="flex items-center gap-2">
                      <button onClick={(e) => { e.stopPropagation(); updateWindow(win.id, { isMinimized: true }); }} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40"><Minimize2 size={18} /></button>
                      <button onClick={(e) => { e.stopPropagation(); updateWindow(win.id, { isMaximized: !win.isMaximized }); }} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/40"><Maximize2 size={18} /></button>
                      <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }} className="p-2 hover:bg-red-500/80 hover:text-white rounded-full transition-colors ml-1 text-white/40"><X size={18} /></button>
                    </div>
                  ) : (
                    <button onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }} className="p-3 hover:bg-red-500 hover:text-white rounded-full transition-colors"><X size={22} /></button>
                  )}
                </div>
                <div className="h-[calc(100%-3.5rem)] overflow-hidden">
                  {renderAppContent(win.id)}
                </div>
              </div>
            ))}
          </div>

          <Launcher isOpen={isLauncherOpen} onClose={() => setIsLauncherOpen(false)} onAppClick={toggleApp} />

          {isControlCenterOpen && (
             <div className="absolute bottom-24 right-4 z-[200] w-[380px] glass-dark rounded-[40px] p-8 text-white shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in slide-in-from-right-4 duration-300">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full p-0.5 border border-white/10 flex items-center justify-center ${isAdmin ? 'bg-indigo-600' : 'bg-blue-600'}`}>
                         {isAdmin ? <UserCheck size={24} /> : <Sparkles size={24} />}
                      </div>
                      <div>
                         <h4 className="font-bold text-lg truncate w-48">{isAdmin ? username : 'Hệ thống Demo'}</h4>
                         <p className={`text-[10px] font-bold uppercase tracking-widest ${isAdmin ? 'text-indigo-400' : 'text-blue-400'}`}>
                            {isAdmin ? 'Quản trị viên' : 'Thiết bị trưng bày'}
                         </p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                      <button className="p-2.5 hover:bg-white/10 rounded-full text-white/60 transition-colors" onClick={handleLogout}><LogOut size={20} /></button>
                   </div>
                </div>

                {!isAdmin && (
                  <div className="mb-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex gap-3">
                    <ShieldAlert className="text-yellow-500 shrink-0" size={18} />
                    <p className="text-[10px] text-yellow-500/80 leading-relaxed font-medium">
                        Đây là phiên bản dùng thử. Vui lòng không thực hiện các giao dịch hoặc đăng nhập tài khoản riêng tư.
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-8">
                   <ControlTile icon={<Wifi />} label="Mạng" sub={isAdmin ? "Admin_Network" : "Studio_Demo"} active={true} />
                   <ControlTile icon={<Bluetooth />} label="Bluetooth" sub="Sẵn sàng" active={true} />
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                   <SquareControlTile icon={<Moon />} label="DND" />
                   <SquareControlTile icon={<PlayCircle />} label="Demo" onClick={() => { setIsDemoLoopActive(true); setIsControlCenterOpen(false); }} />
                   <SquareControlTile icon={<Layout />} label="Tablet" active={isTabletMode} onClick={() => setIsTabletMode(!isTabletMode)} />
                </div>

                <div className="space-y-6">
                   <SliderTile icon={<Volume2 />} value={70} color="bg-blue-500" />
                   <SliderTile icon={<Sun />} value={100} color="bg-blue-500" />
                </div>

                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                      <Info size={12} /> {isAdmin ? 'Admin Console' : 'Retail Mode v2.0'}
                   </div>
                   <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Neural Core: Online</span>
                </div>
             </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 z-[150] flex justify-between items-end p-4 pointer-events-none">
            <div className="pointer-events-auto">
              <button 
                onClick={() => setIsLauncherOpen(!isLauncherOpen)}
                className="w-12 h-12 glass-dark rounded-full flex items-center justify-center hover:bg-white/10 transition-all active:scale-90 shadow-lg border border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              </button>
            </div>

            <div className="pointer-events-auto flex items-center gap-3 glass-dark rounded-full px-4 h-16 shadow-2xl border border-white/5">
              <DockIcon color="bg-indigo-700" icon={<PlayCircle />} onClick={() => toggleApp('experience', 'Trải nghiệm OS')} active={activeWindows.some(w => w.id === 'experience')} />
              <DockIcon color="bg-indigo-600" icon={<Sparkles />} onClick={() => toggleApp('gemini', 'Gemini AI')} active={activeWindows.some(w => w.id === 'gemini')} />
              <DockIcon color="bg-blue-600" icon={<Scale />} onClick={() => toggleApp('meet', 'So sánh OS')} active={activeWindows.some(w => w.id === 'meet')} />
              <DockIcon color="bg-blue-500" icon={<Briefcase />} onClick={() => toggleApp('work', 'Làm việc')} active={activeWindows.some(w => w.id === 'work')} />
              <DockIcon color="bg-green-500" icon={<MessageSquare size={24} />} onClick={() => toggleApp('messages', 'Tin nhắn')} active={activeWindows.some(w => w.id === 'messages')} />
              <DockIcon color="bg-yellow-500" icon={<Folder />} onClick={() => toggleApp('files', 'Tệp tin')} active={activeWindows.some(w => w.id === 'files')} />
              <DockIcon color="bg-amber-400" icon={<Book />} onClick={() => toggleApp('notes', 'Ghi chú')} active={activeWindows.some(w => w.id === 'notes')} />
              <DockIcon color="bg-pink-500" icon={<ShoppingBag />} onClick={() => toggleApp('store', 'Cửa hàng')} active={activeWindows.some(w => w.id === 'store')} />
              <DockIcon color="bg-green-600" icon={<CalcIcon />} onClick={() => toggleApp('calculator', 'Máy tính')} active={activeWindows.some(w => w.id === 'calculator')} />
            </div>

            <div className="pointer-events-auto">
              <button 
                onClick={() => setIsControlCenterOpen(!isControlCenterOpen)}
                className="flex items-center gap-4 glass-dark h-10 px-4 rounded-full text-white/80 hover:text-white transition-colors shadow-lg border border-white/10"
              >
                <div className="flex items-center gap-2 pr-2 border-r border-white/10">
                   <Wifi size={14} />
                   <Battery size={14} />
                </div>
                <span className="text-sm font-bold tracking-tighter">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}</span>
              </button>
            </div>
          </div>
        </>
      )}

      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[300] pointer-events-none opacity-40">
         <span className="text-[10px] font-bold tracking-[0.6em] text-white uppercase flex items-center gap-2">
            <Sparkles size={10} /> {isAdmin ? 'Studio OS Administrator' : 'Studio OS Retail Experience'}
         </span>
      </div>
    </div>
  );
};

// Re-usable dock icon component
const DockIcon: React.FC<{ icon: React.ReactNode, color: string, onClick: () => void, active?: boolean }> = ({ icon, color, onClick, active }) => (
  <button 
    onClick={onClick}
    className={`relative w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-lg transition-all active:scale-90 hover:scale-110 hover:-translate-y-2`}
  >
    {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    {active && <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>}
  </button>
);

const ControlTile: React.FC<{ icon: React.ReactNode, label: string, sub: string, active: boolean, onClick?: () => void }> = ({ icon, label, sub, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-4 p-5 rounded-3xl transition-all ${active ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
  >
    <div className={`p-3 rounded-2xl ${active ? 'bg-white/20' : 'bg-white/5'}`}>{React.cloneElement(icon as React.ReactElement, { size: 24 })}</div>
    <div className="text-left">
       <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">{label}</div>
       <div className="text-sm font-bold truncate w-24">{sub}</div>
    </div>
  </button>
);

const SquareControlTile: React.FC<{ icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-3 p-4 rounded-[32px] aspect-square transition-all ${active ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
  >
    {React.cloneElement(icon as React.ReactElement, { size: 24 })}
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
  </button>
);

const SliderTile: React.FC<{ icon: React.ReactNode, value: number, color: string }> = ({ icon, value, color }) => (
  <div className="flex items-center gap-5">
     <div className={`p-3 rounded-full ${color} text-white shadow-lg`}>
        {React.cloneElement(icon as React.ReactElement, { size: 22 })}
     </div>
     <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden relative">
        <div className={`absolute inset-y-0 left-0 ${color}`} style={{ width: `${value}%` }}></div>
     </div>
  </div>
);

export default App;
