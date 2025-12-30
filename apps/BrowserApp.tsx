
import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, RotateCcw, Home, Shield, Lock } from 'lucide-react';

const BrowserApp: React.FC = () => {
  const [url, setUrl] = useState('https://studio.google.com/ai');
  const [history, setHistory] = useState(['https://studio.google.com/ai']);

  return (
    <div className="h-full flex flex-col bg-[#111] text-white overflow-hidden">
      {/* Address Bar Area */}
      <div className="bg-[#1a1a1a] p-3 flex items-center gap-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/5 rounded-full text-white/40"><ChevronLeft size={18} /></button>
          <button className="p-2 hover:bg-white/5 rounded-full text-white/40"><ChevronRight size={18} /></button>
          <button className="p-2 hover:bg-white/5 rounded-full text-white/40"><RotateCcw size={18} /></button>
        </div>
        
        <div className="flex-1 bg-black/40 rounded-full h-10 px-4 flex items-center gap-3 border border-white/10 group focus-within:border-blue-500/50 transition-all">
          <Lock size={14} className="text-green-500" />
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            className="bg-transparent border-none outline-none text-sm w-full font-medium" 
          />
          <Shield size={14} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/5 rounded-full text-white/40"><Home size={18} /></button>
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
            <img src="https://picsum.photos/32/32?u=browser" alt="" />
          </div>
        </div>
      </div>

      {/* Browser Content Simulation */}
      <div className="flex-1 bg-white overflow-auto p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <span className="text-xl font-bold">G</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Google AI Studio</h1>
            </div>
            <p className="text-slate-500 text-lg max-w-2xl">
              Nền tảng phát triển ứng dụng AI thế hệ mới. Trải nghiệm sức mạnh của Gemini 3 ngay trên trình duyệt của bạn.
            </p>
          </header>

          <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Gemini 3 Flash</h3>
              <p className="text-slate-500 text-sm mb-6">Mô hình nhanh nhất và hiệu quả nhất cho các tác vụ hàng ngày.</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold text-xs uppercase tracking-widest">Thử ngay</button>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Gemini 3 Pro</h3>
              <p className="text-slate-500 text-sm mb-6">Sức mạnh tính toán vượt trội cho các tác vụ phức tạp và sáng tạo.</p>
              <button className="px-6 py-2 bg-slate-800 text-white rounded-full font-bold text-xs uppercase tracking-widest">Tìm hiểu thêm</button>
            </div>
          </div>

          <section className="border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Tin tức mới nhất</h2>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-6 items-center group cursor-pointer">
                  <div className="w-40 h-24 bg-slate-200 rounded-2xl overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/200/120?u=news${i}`} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Studio OS v2.0 chính thức ra mắt với tích hợp Neural Core</h4>
                    <p className="text-sm text-slate-500 mt-1">Hệ điều hành thế hệ mới tập trung hoàn toàn vào trí tuệ nhân tạo.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrowserApp;
