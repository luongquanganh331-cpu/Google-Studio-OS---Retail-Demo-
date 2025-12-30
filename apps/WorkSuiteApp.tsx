
import React, { useState } from 'react';
import { FileText, Table, Presentation, Share2, Search, BrainCircuit, BarChart3, ChevronDown } from 'lucide-react';

const WorkSuiteApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'sheets' | 'slides' | 'analytics'>('docs');

  return (
    <div className="h-full flex flex-col bg-slate-50 text-slate-900 overflow-hidden">
      {/* Ribbon / Toolbar */}
      <div className="bg-white border-b border-slate-200 px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg">
              <FileText size={18} />
            </div>
            <span className="font-bold tracking-tight">Studio Work</span>
          </div>
          
          <nav className="flex items-center gap-1">
            <TabButton icon={<FileText size={16} />} label="Soạn thảo" active={activeTab === 'docs'} onClick={() => setActiveTab('docs')} />
            <TabButton icon={<Table size={16} />} label="Bảng tính" active={activeTab === 'sheets'} onClick={() => setActiveTab('sheets')} />
            <TabButton icon={<Presentation size={16} />} label="Trình chiếu" active={activeTab === 'slides'} onClick={() => setActiveTab('slides')} />
            <TabButton icon={<BarChart3 size={16} />} label="Phân tích" active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md">
            <Share2 size={14} /> Chia sẻ
          </button>
          <div className="w-8 h-8 rounded-full border-2 border-slate-100 overflow-hidden shadow-sm">
            <img src="https://picsum.photos/32/32?u=work" alt="" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto bg-slate-100 p-8">
        {activeTab === 'docs' && (
          <div className="max-w-4xl mx-auto bg-white shadow-xl min-h-[1100px] p-24 border border-slate-200 rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900">Kế hoạch Phát triển Studio OS</h1>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Nháp v2.4</span>
            </div>
            
            <div className="flex items-center gap-3 mb-10 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
              <BrainCircuit className="text-blue-600" size={20} />
              <p className="text-sm text-blue-800 font-medium italic">Gemini đề xuất: "Bạn có muốn thêm biểu đồ phân tích hiệu suất Neural Core vào phần kết luận không?"</p>
            </div>

            <section className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>Chào mừng bạn đến với tài liệu hướng dẫn về <strong>Studio OS</strong>. Đây là hệ điều hành đầu tiên được xây dựng từ đầu với tư duy AI-native.</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Tầm nhìn chiến lược</h2>
              <p>Chúng tôi hướng tới việc xóa bỏ ranh giới giữa người dùng và máy tính thông qua các mô hình ngôn ngữ lớn (LLM). Mọi thao tác từ tìm kiếm tệp tin đến xử lý văn bản đều được tối ưu hóa bởi Neural Core.</p>
              
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Tính năng cốt lõi</h2>
              <ul className="list-disc list-inside space-y-3">
                <li>Tích hợp Gemini 3 trực tiếp vào kernel.</li>
                <li>Hệ thống tệp tin thông minh (Semantic Files).</li>
                <li>Giao diện thích ứng (Fluid UI) cho máy tính bảng và máy tính để bàn.</li>
              </ul>
            </section>
          </div>
        )}

        {activeTab === 'sheets' && (
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-500">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white">
              <h3 className="font-bold">Báo cáo Tài chính Q4</h3>
              <button className="text-slate-400 hover:text-slate-600"><ChevronDown size={18} /></button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-500 border-b border-slate-100">
                  <th className="p-4 text-left font-bold w-12 text-slate-300 italic">ID</th>
                  <th className="p-4 text-left font-bold">Dự án</th>
                  <th className="p-4 text-left font-bold">Ngân sách</th>
                  <th className="p-4 text-left font-bold">Chi phí</th>
                  <th className="p-4 text-left font-bold">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Neural Core Alpha', budget: '$2.5M', spent: '$1.8M', status: 'On Track' },
                  { name: 'Gemini Integration', budget: '$1.2M', spent: '$1.2M', status: 'Completed' },
                  { name: 'Fluid UI Design', budget: '$450K', spent: '$500K', status: 'Over Budget' },
                  { name: 'Cloud Sync v3', budget: '$800K', spent: '$200K', status: 'In Progress' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 text-slate-300 font-mono">0{i+1}</td>
                    <td className="p-4 font-bold text-slate-800">{row.name}</td>
                    <td className="p-4 font-medium text-slate-600">{row.budget}</td>
                    <td className="p-4 font-bold text-blue-600">{row.spent}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        row.status === 'Completed' ? 'bg-green-100 text-green-700' :
                        row.status === 'Over Budget' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                      }`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'slides' && (
          <div className="flex gap-8 h-full">
            <div className="w-56 shrink-0 flex flex-col gap-4 overflow-auto pr-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className={`aspect-video bg-white rounded-xl border-2 transition-all cursor-pointer ${i === 1 ? 'border-blue-600 shadow-lg' : 'border-transparent hover:border-slate-300'}`}>
                  <div className="w-full h-full p-3 flex flex-col gap-2 opacity-40">
                    <div className="h-1.5 w-1/2 bg-slate-800 rounded"></div>
                    <div className="h-1 w-full bg-slate-300 rounded"></div>
                    <div className="h-1 w-2/3 bg-slate-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 bg-white rounded-[40px] shadow-2xl border border-slate-200 flex flex-col items-center justify-center p-20 text-center animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="w-full h-full bg-gradient-to-br from-indigo-700 to-purple-800 rounded-3xl p-12 flex flex-col items-center justify-center text-white shadow-inner">
                <Presentation size={80} className="mb-10 text-white/20" />
                <h2 className="text-6xl font-extrabold mb-6 tracking-tight">Giới thiệu Studio OS 2.0</h2>
                <p className="text-xl text-indigo-100/50 uppercase tracking-[0.4em] font-bold">Kỷ nguyên của Trí tuệ Nhân tạo</p>
                <div className="mt-16 w-32 h-1 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid grid-cols-2 gap-8 animate-in fade-in duration-500">
            <div className="p-10 bg-white rounded-[40px] shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-8 text-slate-800">Hiệu suất Xử lý (NPU)</h3>
              <div className="h-64 flex items-end gap-4">
                {[45, 78, 56, 92, 45, 88, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-100 rounded-t-xl relative group transition-all hover:bg-blue-600">
                    <div className="absolute inset-0 bg-blue-600 rounded-t-xl transition-all" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>Thứ 2</span><span>Thứ 3</span><span>Thứ 4</span><span>Thứ 5</span><span>Thứ 6</span><span>Thứ 7</span><span>CN</span>
              </div>
            </div>
            <div className="p-10 bg-white rounded-[40px] shadow-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-8 text-slate-800">Phân bổ Tài nguyên</h3>
              <div className="flex flex-col gap-6">
                <ProgressBar label="Neural Core" val={82} color="bg-indigo-600" />
                <ProgressBar label="System Kernel" val={15} color="bg-slate-400" />
                <ProgressBar label="User Applications" val={48} color="bg-blue-500" />
                <ProgressBar label="Network Latency" val={4} color="bg-green-500" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TabButton: React.FC<{ icon: React.ReactNode, label: string, active: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${active ? 'bg-slate-100 text-blue-600 shadow-inner' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}`}
  >
    {icon} {label}
  </button>
);

const ProgressBar: React.FC<{ label: string, val: number, color: string }> = ({ label, val, color }) => (
  <div>
    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
      <span>{label}</span>
      <span>{val}%</span>
    </div>
    <div className="h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
      <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${val}%` }}></div>
    </div>
  </div>
);

export default WorkSuiteApp;
