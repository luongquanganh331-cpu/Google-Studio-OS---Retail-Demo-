
import React, { useState } from 'react';
import { Play, Sparkles, BrainCircuit, Globe, Zap, ArrowRight, Shield, Cpu, ChevronLeft, CheckCircle2, Lock, Smartphone, Monitor } from 'lucide-react';

const ExperienceApp: React.FC = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    { 
      title: "Trí tuệ Gemini 3", 
      desc: "Trải nghiệm khả năng suy luận vượt trội của mô hình Flash-preview.", 
      icon: <BrainCircuit />,
      color: "bg-indigo-600",
      content: <GeminiModule />
    },
    { 
      title: "Đa nhiệm Linh hoạt", 
      desc: "Chuyển đổi mượt mà giữa chế độ Desktop và Tablet.", 
      icon: <Zap />,
      color: "bg-blue-500",
      content: <MultitaskingModule />
    },
    { 
      title: "Hệ thống Tệp Thông minh", 
      desc: "Tìm kiếm tệp tin bằng ngôn ngữ tự nhiên, không cần thư mục.", 
      icon: <Globe />,
      color: "bg-purple-600",
      content: <FilesModule />
    },
    { 
      title: "Bảo mật Tuyệt đối", 
      desc: "Xác thực sinh trắc học và mã hóa Neural Core.", 
      icon: <Shield />,
      color: "bg-emerald-600",
      content: <SecurityModule />
    },
  ];

  if (activeModule !== null) {
    return (
      <div className="h-full bg-[#050505] text-white flex flex-col animate-in fade-in slide-in-from-right-8 duration-500">
        <div className="h-20 px-8 border-b border-white/5 flex items-center justify-between shrink-0 bg-black/40">
           <button 
             onClick={() => setActiveModule(null)}
             className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
           >
             <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
             <span className="font-bold text-sm uppercase tracking-widest">Quay lại</span>
           </button>
           <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${modules[activeModule].color} flex items-center justify-center`}>
                 {React.cloneElement(modules[activeModule].icon as React.ReactElement, { size: 16 })}
              </div>
              <h2 className="font-bold text-lg">{modules[activeModule].title}</h2>
           </div>
           <div className="w-24"></div> {/* Spacer */}
        </div>
        <div className="flex-1 overflow-auto">
          {modules[activeModule].content}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-white text-slate-900 overflow-auto">
      {/* Hero Section */}
      <div className="p-16 bg-gradient-to-br from-[#0a0a2e] to-[#0d0d1a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <div className="w-full h-full bg-blue-600/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles size={12} /> Studio OS Experience Center
          </div>
          <h1 className="text-6xl font-extrabold tracking-tighter mb-6 leading-[0.9]">Chào mừng đến với Tương lai của Máy tính.</h1>
          <p className="text-xl text-white/50 max-w-2xl font-medium leading-relaxed mb-10">
            Khám phá cách Studio OS tái định nghĩa năng suất với sự hỗ trợ của trí tuệ nhân tạo thế hệ mới nhất từ Google.
          </p>
          <button 
            onClick={() => setActiveModule(0)}
            className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all flex items-center gap-3 shadow-2xl"
          >
            Bắt đầu khám phá <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="p-16 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Các Mô-đun Trải nghiệm</h2>
          <div className="flex items-center gap-2 text-slate-400 font-medium">
             <Cpu size={18} /> Neural Core: Online
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {modules.map((m, i) => (
            <div 
              key={i} 
              className="group p-10 bg-slate-50 border border-slate-100 rounded-[40px] hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-500/20 transition-all cursor-pointer relative overflow-hidden"
              onClick={() => setActiveModule(i)}
            >
              <div className={`w-16 h-16 ${m.color} rounded-2xl flex items-center justify-center text-white shadow-xl mb-8 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(m.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{m.desc}</p>
              <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-[10px] tracking-widest">
                Khám phá ngay <Play size={12} fill="currentColor" />
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-200/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/10 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[40px] text-white flex items-center gap-12 shadow-2xl overflow-hidden relative">
           <div className="flex-1 relative z-10">
              <h2 className="text-3xl font-bold mb-4">Bạn đã sẵn sàng để nâng cấp?</h2>
              <p className="text-white/40 mb-8 max-w-md">Studio OS v2.0 hiện đã có sẵn cho các đối tác bán lẻ. Liên hệ đội ngũ hỗ trợ để biết thêm chi tiết.</p>
              <button className="px-6 py-2 bg-blue-600 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">Liên hệ Sales</button>
           </div>
           <div className="w-64 h-64 bg-indigo-600/20 blur-[80px] rounded-full absolute -right-10 -bottom-10"></div>
           <div className="relative z-10 w-48 h-48 border-2 border-white/5 rounded-full flex items-center justify-center">
              <Sparkles size={64} className="text-blue-400 animate-pulse" />
           </div>
        </div>
      </div>
    </div>
  );
};

// --- Module Components ---

const GeminiModule = () => (
  <div className="p-12 max-w-4xl mx-auto space-y-12">
    <div className="text-center">
       <Sparkles size={64} className="mx-auto mb-6 text-indigo-400" />
       <h3 className="text-4xl font-bold mb-4">Khả năng Suy luận Vô hạn</h3>
       <p className="text-white/40 text-lg">Studio OS tích hợp Gemini trực tiếp vào cấp độ hệ thống, cho phép xử lý ngữ cảnh sâu sắc trên toàn bộ ứng dụng của bạn.</p>
    </div>
    <div className="grid grid-cols-2 gap-6">
       <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
          <h4 className="font-bold text-indigo-400 mb-4 uppercase tracking-widest text-[10px]">Tự động hóa thông minh</h4>
          <p className="text-sm leading-relaxed">Hệ thống tự động học thói quen sử dụng để tối ưu hóa pin và hiệu suất NPU.</p>
       </div>
       <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
          <h4 className="font-bold text-indigo-400 mb-4 uppercase tracking-widest text-[10px]">Tóm tắt nội dung</h4>
          <p className="text-sm leading-relaxed">Bất kỳ trang web hay tài liệu nào cũng có thể được tóm tắt ngay lập tức bằng một cú nhấp chuột.</p>
       </div>
    </div>
    <div className="p-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-[40px]">
       <div className="bg-[#0a0a0a] rounded-[39px] p-12 text-center">
          <p className="text-2xl font-medium mb-8">"Lên kế hoạch du lịch 3 ngày tại Đà Lạt tập trung vào cà phê và thiên nhiên."</p>
          <button className="px-10 py-4 bg-indigo-600 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(79,70,229,0.4)]">Thử nghiệm ngay trong Gemini App</button>
       </div>
    </div>
  </div>
);

const MultitaskingModule = () => {
  const [mode, setMode] = useState<'desktop' | 'tablet'>('desktop');
  return (
    <div className="p-12 max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
         <Zap size={64} className="mb-6 text-blue-400" />
         <h3 className="text-4xl font-bold mb-4">Giao diện Thích ứng (Fluid UI)</h3>
         <p className="text-white/40 text-lg max-w-2xl">Trải nghiệm sự chuyển đổi mượt mà giữa năng suất làm việc tối đa và sự tiện lợi của máy tính bảng.</p>
      </div>
      
      <div className="flex justify-center gap-4 mb-12">
         <button 
           onClick={() => setMode('desktop')}
           className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${mode === 'desktop' ? 'bg-blue-600 text-white shadow-xl' : 'bg-white/5 text-white/40'}`}
         >
           <Monitor size={20} /> Desktop Mode
         </button>
         <button 
           onClick={() => setMode('tablet')}
           className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${mode === 'tablet' ? 'bg-blue-600 text-white shadow-xl' : 'bg-white/5 text-white/40'}`}
         >
           <Smartphone size={20} /> Tablet Mode
         </button>
      </div>

      <div className="aspect-video bg-white/5 border border-white/10 rounded-[40px] p-8 relative overflow-hidden flex items-center justify-center">
         <div className={`transition-all duration-700 flex flex-wrap justify-center gap-4 ${mode === 'desktop' ? 'w-full' : 'max-w-[400px]'}`}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`bg-blue-600/20 border border-blue-500/30 rounded-2xl p-6 transition-all duration-700 ${mode === 'desktop' ? 'w-[200px] h-[150px]' : 'w-full h-[120px]'}`}>
                <div className="w-1/2 h-2 bg-blue-500 rounded-full mb-4"></div>
                <div className="w-full h-1 bg-white/10 rounded-full mb-2"></div>
                <div className="w-2/3 h-1 bg-white/10 rounded-full"></div>
              </div>
            ))}
         </div>
         <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-widest text-white/20">Mô phỏng giao diện {mode}</div>
      </div>
    </div>
  );
};

const FilesModule = () => (
  <div className="p-12 max-w-4xl mx-auto space-y-12">
    <div className="text-center">
       <Globe size={64} className="mx-auto mb-6 text-purple-400" />
       <h3 className="text-4xl font-bold mb-4">Semantic File System</h3>
       <p className="text-white/40 text-lg">Quên đi các thư mục phức tạp. Studio OS hiểu nội dung tệp tin của bạn.</p>
    </div>
    <div className="space-y-4">
       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between">
          <div className="flex items-center gap-6">
             <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center"><BrainCircuit size={24} /></div>
             <div>
                <h4 className="font-bold">Tìm kiếm theo ngữ nghĩa</h4>
                <p className="text-xs text-white/30">"Tìm tệp tin có hình ảnh bãi biển tôi đã sửa tuần trước"</p>
             </div>
          </div>
          <CheckCircle2 className="text-green-500" size={24} />
       </div>
       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-between">
          <div className="flex items-center gap-6">
             <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"><Globe size={24} /></div>
             <div>
                <h4 className="font-bold">Cloud-Core Hybrid</h4>
                <p className="text-xs text-white/30">Truy cập tức thì tệp tin từ Drive và local như một thực thể duy nhất.</p>
             </div>
          </div>
          <CheckCircle2 className="text-green-500" size={24} />
       </div>
    </div>
  </div>
);

const SecurityModule = () => (
  <div className="p-12 max-w-4xl mx-auto flex flex-col items-center">
    <Shield size={80} className="mb-8 text-emerald-400 animate-pulse" />
    <h3 className="text-4xl font-bold mb-6">Bảo mật ở Cấp độ Phần cứng</h3>
    <p className="text-white/40 text-lg text-center mb-12 max-w-2xl">Mọi dữ liệu sinh trắc học và khóa bảo mật được lưu trữ trong Neural Vault độc lập, không bao giờ rời khỏi thiết bị.</p>
    
    <div className="w-full grid grid-cols-3 gap-6">
       <SecurityCard icon={<Lock />} title="Mã hóa Toàn bộ" desc="Tiêu chuẩn AES-256 lượng tử." />
       <SecurityCard icon={<BrainCircuit />} title="Neural Auth" desc="Xác thực khuôn mặt AI." />
       <SecurityCard icon={<Shield />} title="App Sandboxing" desc="Ứng dụng chạy độc lập." />
    </div>

    <div className="mt-16 p-8 bg-emerald-600/10 border border-emerald-500/20 rounded-[32px] w-full text-center">
       <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-400 block mb-4">Neural Core Verified</span>
       <p className="text-sm font-medium">Studio OS được chứng nhận bảo mật bởi hệ thống phòng thủ đa lớp Google AI Security.</p>
    </div>
  </div>
);

const SecurityCard = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center flex flex-col items-center">
     <div className="text-emerald-400 mb-4">{React.cloneElement(icon, { size: 32 })}</div>
     <h4 className="font-bold text-sm mb-2">{title}</h4>
     <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">{desc}</p>
  </div>
);

export default ExperienceApp;
