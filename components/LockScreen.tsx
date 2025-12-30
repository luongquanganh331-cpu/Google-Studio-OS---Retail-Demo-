
import React, { useState, useEffect } from 'react';
import { Camera, ArrowRight, ShieldAlert, Sparkles, UserLock, X, KeyRound, User } from 'lucide-react';

interface LockScreenProps {
  onUnlock: (isAdmin: boolean, username?: string) => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [time, setTime] = useState(new Date());
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('vi-VN', options).toUpperCase();
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'sensaidaynekandhadilao' && password === 'Blue Archive') {
      onUnlock(true, 'sensaidaynekandhadilao');
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center text-white bg-black overflow-hidden">
      {/* Premium Neural Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a0a2e] to-black"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]"></div>
      </div>
      
      {/* Top Banner: Retail Notice */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-center z-20">
        <div className="glass-dark px-6 py-2 rounded-full border border-yellow-500/20 flex items-center gap-3 animate-in slide-in-from-top duration-700">
          <ShieldAlert size={16} className="text-yellow-500" />
          <p className="text-[11px] font-bold text-yellow-500/90 tracking-wide uppercase">
            Phiên bản trưng bày (Retail Demo) - Vui lòng không đăng nhập tài khoản cá nhân
          </p>
        </div>
      </div>

      {!showLogin ? (
        <>
          <div className="relative z-10 flex flex-col items-center gap-2 mb-16 animate-in fade-in zoom-in duration-1000">
            <h1 className="text-[180px] font-bold leading-none tracking-tighter opacity-90 drop-shadow-2xl">{formatTime(time)}</h1>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-white/20"></div>
              <p className="text-xl font-medium tracking-[0.4em] text-blue-300/80">{formatDate(time)}</p>
              <div className="h-px w-12 bg-white/20"></div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 animate-fade-in-up">
            <div className="flex flex-col items-center gap-4">
               <div className="w-24 h-24 rounded-3xl glass flex items-center justify-center border border-white/10 shadow-2xl">
                  <Sparkles size={48} className="text-blue-400" />
               </div>
               <div className="text-center">
                  <h2 className="text-3xl font-extrabold tracking-tight mb-1">Studio OS</h2>
                  <div className="px-3 py-1 bg-blue-600 rounded-full text-[9px] font-black uppercase tracking-[0.2em] inline-block">
                    Demo Edition
                  </div>
               </div>
            </div>

            <button 
              onClick={() => onUnlock(false)}
              className="group relative flex items-center gap-4 bg-white text-black px-10 py-5 rounded-[24px] font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
            >
              <span>Bắt đầu trải nghiệm</span>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </button>

            <button 
              onClick={() => setShowLogin(true)}
              className="mt-4 flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <UserLock size={14} /> Quản trị viên
            </button>

            <div className="max-w-md text-center px-8">
               <p className="text-xs text-white/30 leading-relaxed italic">
                 "Đây là phiên bản của hệ điều hành dành cho những mẫu mã trưng bày, mọi tính năng được tối ưu cho việc trải nghiệm nhanh."
               </p>
            </div>
          </div>
        </>
      ) : (
        <div className={`relative z-50 w-full max-w-sm glass-dark rounded-[48px] p-10 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 ${error ? 'animate-shake' : ''}`}>
           <button 
             onClick={() => setShowLogin(false)}
             className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full text-white/40 transition-colors"
           >
             <X size={20} />
           </button>

           <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                 <UserLock size={32} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Xác thực Admin</h3>
              <p className="text-xs text-white/40 mt-2">Dành cho kỹ thuật viên cửa hàng</p>
           </div>

           <form onSubmit={handleAdminLogin} className="space-y-4">
              <div className="space-y-2">
                 <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="text"
                      placeholder="Tên đăng nhập"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm focus:bg-white/10 focus:border-blue-500/50 outline-none transition-all"
                    />
                 </div>
                 <div className="relative">
                    <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="password"
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 text-sm focus:bg-white/10 focus:border-blue-500/50 outline-none transition-all"
                    />
                 </div>
              </div>

              {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center">Sai thông tin xác thực</p>}

              <button 
                type="submit"
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center justify-center gap-2"
              >
                Đăng nhập <ArrowRight size={18} />
              </button>
           </form>
        </div>
      )}

      <div className="absolute bottom-10 flex items-center gap-6 opacity-20">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
           <ShieldAlert size={12} /> Privacy Protected
        </div>
        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
        <div className="text-[10px] font-bold uppercase tracking-widest">
           Google AI Studio v2.0
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
