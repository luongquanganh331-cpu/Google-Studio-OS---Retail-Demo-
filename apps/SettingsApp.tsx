
import React, { useState } from 'react';
import { Shield, User, Globe, Layout, Palette, Info, HelpCircle, Wifi, Bluetooth, Cpu, Zap, Bell, Moon, Sparkles, UserCheck, ShieldAlert, ArrowRight, RefreshCw, Download, MonitorCheck, KeyRound } from 'lucide-react';

interface SettingsAppProps {
  isTabletMode: boolean;
  setIsTabletMode: (val: boolean) => void;
  isAdmin: boolean;
  username: string | null;
  onAdminRequest: () => void;
}

const SettingsApp: React.FC<SettingsAppProps> = ({ isTabletMode, setIsTabletMode, isAdmin, username, onAdminRequest }) => {
  const [activeTab, setActiveTab] = useState('account');
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgress, setUpdateProgress] = useState(0);
  const [updateStage, setUpdateStage] = useState('');

  const handleUpdate = (type: 'system' | 'demo') => {
    setIsUpdating(true);
    setUpdateProgress(0);
    setUpdateStage(type === 'system' ? 'Đang kiểm tra máy chủ...' : 'Đang tải nội dung demo mới...');
    
    const interval = setInterval(() => {
      setUpdateProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUpdating(false);
            alert(type === 'system' ? 'Hệ thống đã được cập nhật thành công!' : 'Nội dung Demo đã được làm mới.');
          }, 500);
          return 100;
        }
        if (prev === 30) setUpdateStage(type === 'system' ? 'Đang tải gói cài đặt (1.2 GB)...' : 'Đang tối ưu hóa tài nguyên hình ảnh...');
        if (prev === 70) setUpdateStage(type === 'system' ? 'Đang xác thực chữ ký số Admin...' : 'Đang cập nhật vòng lặp trải nghiệm...');
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="h-full flex bg-[#050505] text-white">
      <div className="w-72 border-r border-white/5 flex flex-col p-6 bg-black">
         <h2 className="px-4 py-8 text-2xl font-bold tracking-tight">Cài đặt</h2>
         <nav className="flex-1 flex flex-col gap-1">
            <NavItem icon={<User size={18} />} label="Tài khoản" active={activeTab === 'account'} onClick={() => setActiveTab('account')} />
            <NavItem icon={<Layout size={18} />} label="Màn hình" active={activeTab === 'display'} onClick={() => setActiveTab('display')} />
            <NavItem icon={<Globe size={18} />} label="Kết nối" active={activeTab === 'network'} onClick={() => setActiveTab('network')} />
            <NavItem icon={<Zap size={18} />} label="Hiệu năng AI" active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} />
            <NavItem icon={<Shield size={18} />} label="Bảo mật" active={activeTab === 'privacy'} onClick={() => setActiveTab('privacy')} />
            <div className="mt-auto pt-6 border-t border-white/5">
               <NavItem icon={<Info size={18} />} label="Về Studio OS" active={activeTab === 'about'} onClick={() => setActiveTab('about')} />
            </div>
         </nav>
      </div>

      <div className="flex-1 p-16 overflow-auto">
         <div className="max-w-3xl">
            {activeTab === 'account' && (
               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-4xl font-bold mb-12">Tài khoản</h3>
                  
                  <div className="space-y-8">
                     <div className="p-10 bg-white/5 rounded-[40px] border border-white/10 flex items-center gap-8">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center border-4 border-white/5 shadow-2xl ${isAdmin ? 'bg-indigo-600' : 'bg-blue-600'}`}>
                           {isAdmin ? <UserCheck size={48} /> : <Sparkles size={48} />}
                        </div>
                        <div className="flex-1">
                           <h4 className="text-3xl font-bold tracking-tight mb-2">
                              {isAdmin ? username : 'Người dùng thử nghiệm'}
                           </h4>
                           <div className="flex gap-2">
                              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isAdmin ? 'bg-indigo-500/20 text-indigo-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                 {isAdmin ? 'Quản trị viên hệ thống' : 'Phiên bản Retail'}
                              </span>
                              {!isAdmin && (
                                 <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                                    <ShieldAlert size={10} /> Chế độ Demo
                                 </span>
                              )}
                           </div>
                        </div>
                     </div>

                     {!isAdmin ? (
                        <div className="space-y-6">
                           <div className="p-8 bg-yellow-500/5 border border-yellow-500/10 rounded-[32px] space-y-4">
                              <div className="flex items-center gap-3 text-yellow-500">
                                 <Info size={20} />
                                 <h5 className="font-bold uppercase tracking-widest text-xs">Thông báo trải nghiệm</h5>
                              </div>
                              <p className="text-sm text-white/40 leading-relaxed italic">
                                 Đây là người dùng thử nghiệm được tối ưu cho các thao tác trải nghiệm tại chỗ. Các tính năng quản trị và cấu hình sâu hiện đang bị khóa.
                              </p>
                           </div>

                           <button 
                             onClick={onAdminRequest}
                             className="w-full p-8 bg-white/5 hover:bg-white/10 rounded-[32px] border border-white/10 flex items-center justify-between group transition-all"
                           >
                              <div className="flex items-center gap-4">
                                 <KeyRound size={24} className="text-white/40 group-hover:text-blue-400 transition-colors" />
                                 <div className="text-left">
                                    <h5 className="font-bold">Bạn là Quản trị viên?</h5>
                                    <p className="text-xs text-white/30">Xác thực tài khoản Admin tại đây để tiếp tục</p>
                                 </div>
                              </div>
                              <ArrowRight size={20} className="text-white/20 group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                     ) : (
                        <div className="p-10 bg-indigo-950/20 border border-indigo-500/20 rounded-[40px] space-y-8 relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-10">
                              <Shield size={120} />
                           </div>
                           <h5 className="text-xl font-bold flex items-center gap-3">
                              <Cpu size={24} className="text-indigo-400" /> Bảng điều khiển Admin
                           </h5>
                           
                           {isUpdating ? (
                              <div className="space-y-6 py-4">
                                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-indigo-400">
                                    <span>{updateStage}</span>
                                    <span>{updateProgress}%</span>
                                 </div>
                                 <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${updateProgress}%` }}></div>
                                 </div>
                              </div>
                           ) : (
                              <div className="grid grid-cols-2 gap-4">
                                 <button 
                                   onClick={() => handleUpdate('system')}
                                   className="p-6 bg-indigo-600 hover:bg-indigo-700 rounded-3xl flex flex-col gap-4 transition-all group shadow-xl shadow-indigo-900/40"
                                 >
                                    <Download className="group-hover:translate-y-1 transition-transform text-white/60" />
                                    <div className="text-left">
                                       <div className="font-bold">Cập nhật phần mềm</div>
                                       <div className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Check for build v2.6</div>
                                    </div>
                                 </button>
                                 <button 
                                   onClick={() => handleUpdate('demo')}
                                   className="p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-3xl flex flex-col gap-4 transition-all group"
                                 >
                                    <RefreshCw className="group-hover:rotate-180 transition-transform duration-700 text-white/40" />
                                    <div className="text-left">
                                       <div className="font-bold">Cập nhật Demo</div>
                                       <div className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Refresh retail loop</div>
                                    </div>
                                 </button>
                              </div>
                           )}
                        </div>
                     )}
                  </div>
               </div>
            )}

            {activeTab === 'about' && (
               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-4xl font-bold mb-12">Thông tin hệ thống</h3>
                  
                  <div className="space-y-12">
                     <div className="flex flex-col items-center text-center p-10">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] flex items-center justify-center text-white shadow-2xl mb-8 relative">
                           <Sparkles size={64} />
                           <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 -z-10"></div>
                        </div>
                        <h4 className="text-3xl font-bold mb-2 tracking-tight">Studio OS</h4>
                        <p className="text-white/30 text-[10px] tracking-[0.5em] uppercase font-black">AI-Native Neural Experience</p>
                     </div>

                     <div className="space-y-4">
                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                           <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Phát hành</span>
                           <span className="font-bold">Google AI Studio Retail</span>
                        </div>
                        
                        {isAdmin ? (
                           <>
                              <div className="p-6 bg-indigo-500/10 rounded-3xl border border-indigo-500/20 flex items-center justify-between group animate-in slide-in-from-top-4">
                                 <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Phiên bản Kernel</span>
                                 <span className="font-mono font-bold text-sm bg-indigo-500/20 px-3 py-1 rounded-lg">v2.5.4-stable_99x</span>
                              </div>
                              <div className="p-6 bg-indigo-500/10 rounded-3xl border border-indigo-500/20 flex items-center justify-between group animate-in slide-in-from-top-4 [animation-delay:100ms]">
                                 <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Neural Core ID</span>
                                 <span className="font-mono font-bold text-xs">NC-8829-SENSAI-01</span>
                              </div>
                           </>
                        ) : (
                           <div className="p-8 bg-blue-500/10 rounded-3xl border border-blue-500/20 text-center relative overflow-hidden">
                              <MonitorCheck className="mx-auto mb-4 text-blue-400" size={32} />
                              <p className="text-sm font-medium leading-relaxed max-w-sm mx-auto">
                                 Thiết bị này đang chạy phiên bản trưng bày tối ưu hóa đặc biệt cho cửa hàng.
                              </p>
                              <div className="mt-4 text-[9px] font-black text-blue-400/50 uppercase tracking-[0.2em]">Cập nhật lần cuối: 12 phút trước</div>
                           </div>
                        )}

                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
                           <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Trạng thái thiết bị</span>
                           <span className="text-green-500 font-bold flex items-center gap-2 text-sm uppercase tracking-tighter">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div> Sẵn sàng trưng bày
                           </span>
                        </div>
                     </div>

                     <p className="text-[9px] text-white/10 text-center uppercase tracking-[0.4em] font-black pt-12">
                        &copy; 2025 Google AI Studio. All Rights Reserved.
                     </p>
                  </div>
               </div>
            )}

            {activeTab === 'display' && (
               <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                  <h3 className="text-4xl font-bold mb-12">Màn hình & Không gian</h3>
                  <div className="space-y-12">
                     <section className="p-8 bg-white/5 rounded-[32px] border border-white/5 flex items-center justify-between">
                        <div>
                           <h4 className="font-bold text-lg mb-1">Chế độ Máy tính bảng</h4>
                           <p className="text-sm text-white/40">Tối ưu hóa bố cục cho cảm ứng và tập trung toàn màn hình.</p>
                        </div>
                        <button 
                          onClick={() => setIsTabletMode(!isTabletMode)}
                          className={`relative w-16 h-9 rounded-full transition-all duration-300 ${isTabletMode ? 'bg-indigo-600' : 'bg-white/10'}`}
                        >
                           <div className={`absolute top-1 w-7 h-7 bg-white rounded-full shadow-xl transition-all duration-300 ${isTabletMode ? 'left-8' : 'left-1'}`}></div>
                        </button>
                     </section>

                     <section className="grid grid-cols-2 gap-6">
                        <div className="p-8 bg-white/5 rounded-[32px] border border-white/5">
                           <Moon className="text-indigo-400 mb-6" size={32} />
                           <h4 className="font-bold mb-2">Bảo vệ mắt</h4>
                           <p className="text-xs text-white/30 leading-relaxed">Tự động điều chỉnh nhiệt độ màu dựa trên thời gian thực tế.</p>
                           <button className="mt-6 px-4 py-2 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">Đang bật</button>
                        </div>
                        <div className="p-8 bg-white/5 rounded-[32px] border border-white/5">
                           <Layout className="text-indigo-400 mb-6" size={32} />
                           <h4 className="font-bold mb-2">Tỷ lệ Launcher</h4>
                           <p className="text-xs text-white/30 leading-relaxed">Điều chỉnh mật độ lưới ứng dụng trong màn hình chính.</p>
                           <div className="mt-6 h-1 bg-white/10 rounded-full relative">
                              <div className="absolute inset-y-0 left-0 w-1/2 bg-indigo-600 rounded-full"></div>
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                           </div>
                        </div>
                     </section>
                  </div>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
   <button 
     onClick={onClick}
     className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold transition-all ${active ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
   >
      {icon} {label}
   </button>
);

export default SettingsApp;
