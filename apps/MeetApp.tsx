
import React from 'react';
import { Check, X, Apple, Layout as Windows, Chrome, Sparkles, Terminal, HardDrive, Gamepad2, ShieldCheck, Zap, Scale } from 'lucide-react';

const MeetApp: React.FC = () => {
  const comparisonData = [
    { feature: 'Core AI Integration (Gemini 3)', studio: 'full', win: 'partial', mac: 'partial', chrome: 'partial', linux: 'none', ubuntu: 'none', arch: 'none', steam: 'none' },
    { feature: 'NPU-Native Kernel Scheduling', studio: 'full', win: 'partial', mac: 'partial', chrome: 'none', linux: 'none', ubuntu: 'none', arch: 'none', steam: 'none' },
    { feature: 'Gaming / Proton Optimization', studio: 'high', win: 'full', mac: 'none', chrome: 'none', linux: 'high', ubuntu: 'high', arch: 'high', steam: 'full' },
    { feature: 'Customization / DIY Level', studio: 'high', win: 'medium', mac: 'low', chrome: 'low', linux: 'full', ubuntu: 'high', arch: 'extreme', steam: 'medium' },
    { feature: 'Package Management / Store', studio: 'Neural Store', win: 'MS Store', mac: 'App Store', chrome: 'Play Store', linux: 'Diverse', ubuntu: 'APT/Snap', arch: 'PACMAN/AUR', steam: 'Steam' },
    { feature: 'Privacy & Data Ownership', studio: 'extreme', win: 'low', mac: 'high', chrome: 'low', linux: 'extreme', ubuntu: 'high', arch: 'extreme', steam: 'medium' },
    { feature: 'Zero-Latency Handoff (Mobile)', studio: 'full', win: 'partial', mac: 'full', chrome: 'full', linux: 'none', ubuntu: 'none', arch: 'none', steam: 'none' },
  ];

  const osList = [
    { id: 'studio', name: 'Studio AI', icon: <Sparkles size={24} className="text-blue-400" />, highlight: true },
    { id: 'win', name: 'Windows', icon: <Windows size={24} />, highlight: false },
    { id: 'mac', name: 'macOS', icon: <Apple size={24} />, highlight: false },
    { id: 'chrome', name: 'ChromeOS', icon: <Chrome size={24} />, highlight: false },
    { id: 'linux', name: 'Linux', icon: <Terminal size={24} />, highlight: false },
    { id: 'ubuntu', name: 'Ubuntu', icon: <HardDrive size={24} />, highlight: false },
    { id: 'arch', name: 'Arch Linux', icon: <Zap size={24} />, highlight: false },
    { id: 'steam', name: 'SteamOS', icon: <Gamepad2 size={24} />, highlight: false },
  ];

  const renderStatus = (val: string, isStudio: boolean) => {
    if (val === 'full') return <Check size={18} className={isStudio ? "text-green-400" : "text-green-600"} />;
    if (val === 'extreme') return <ShieldCheck size={18} className={isStudio ? "text-blue-400" : "text-blue-600"} />;
    if (val === 'partial' || val === 'medium') return <span className="text-[10px] font-bold uppercase text-slate-400">Partial</span>;
    if (val === 'none' || val === 'low') return <X size={18} className="text-slate-200" />;
    if (val === 'high') return <Zap size={18} className="text-yellow-500" />;
    return <span className="text-[9px] font-bold text-slate-500">{val}</span>;
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col overflow-hidden text-slate-900">
      {/* Header Section */}
      <div className="p-12 bg-[#0a0a2e] text-white flex justify-between items-center shrink-0">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold tracking-tighter mb-4 flex items-center gap-4">
            <Scale className="text-blue-400" size={40} /> Studio AI vs The World
          </h1>
          <p className="text-indigo-200/60 text-lg font-medium leading-relaxed">
            So sánh trực quan giữa hệ điều hành AI thế hệ mới với các nền tảng truyền thống và cộng đồng mã nguồn mở.
          </p>
        </div>
        <div className="hidden lg:block">
           <div className="p-6 glass-dark rounded-3xl border border-white/10 text-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-blue-400">AI-Native Efficiency</div>
           </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="flex-1 overflow-auto bg-white">
        <div className="min-w-[1200px] p-8">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="py-8 px-6 text-left w-64 sticky left-0 bg-white z-10 shadow-[5px_0_10px_-5px_rgba(0,0,0,0.05)]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Capability</span>
                </th>
                {osList.map((os) => (
                  <th key={os.id} className={`py-8 px-4 text-center ${os.highlight ? 'bg-blue-50/50' : ''}`}>
                    <div className="flex flex-col items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${os.highlight ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-slate-100 text-slate-600'}`}>
                        {os.icon}
                      </div>
                      <span className={`text-sm font-bold ${os.highlight ? 'text-blue-600' : 'text-slate-700'}`}>{os.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors group">
                  <td className="py-6 px-6 font-bold text-sm text-slate-600 sticky left-0 bg-white z-10 shadow-[5px_0_10px_-5px_rgba(0,0,0,0.05)] group-hover:bg-slate-50">
                    {row.feature}
                  </td>
                  {osList.map((os) => (
                    <td key={os.id} className={`py-6 px-4 text-center ${os.highlight ? 'bg-blue-50/30' : ''}`}>
                      <div className="flex items-center justify-center">
                        {renderStatus((row as any)[os.id], os.highlight)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Contextual Footer */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
               <h4 className="font-bold mb-3 flex items-center gap-2 text-blue-600"><Sparkles size={16} /> Studio AI Choice</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Được tối ưu hóa cho công việc sáng tạo và lập trình dựa trên AI. Không cần cài đặt trình điều khiển phức tạp, mọi thứ hoạt động ngay lập tức qua Neural Core.
               </p>
            </div>
            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
               <h4 className="font-bold mb-3 flex items-center gap-2 text-slate-800"><Terminal size={16} /> Open Source Freedom</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Chúng tôi hỗ trợ kernel Linux và tương thích với các kho ứng dụng AUR và APT, giúp người dùng Arch và Ubuntu dễ dàng chuyển đổi sang Studio AI.
               </p>
            </div>
            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
               <h4 className="font-bold mb-3 flex items-center gap-2 text-green-600"><Gamepad2 size={16} /> Game Ready</h4>
               <p className="text-xs text-slate-500 leading-relaxed">
                  Nhờ tích hợp Proton và AI-Upscaling, hiệu suất chơi game trên Studio AI vượt qua cả SteamOS trong một số bài kiểm tra mô phỏng.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetApp;
