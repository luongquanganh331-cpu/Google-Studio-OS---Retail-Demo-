
import React, { useState } from 'react';
import { Search, Edit3, Image, Smile, Mic, Send } from 'lucide-react';

const MessagesApp: React.FC = () => {
  const contacts = [
    { name: 'Alex Thompson', last: 'See you at the Studio demo!', time: '10:42', unread: 2 },
    { name: 'Sarah Chen', last: 'The AI core is looking solid.', time: '09:15', unread: 0 },
    { name: 'Project Alpha', last: 'New build deployed.', time: 'Yesterday', unread: 0 },
    { name: 'James Wilson', last: 'Dinner tonight?', time: 'Tue', unread: 1 },
  ];

  return (
    <div className="h-full flex bg-black text-white">
      <div className="w-80 border-r border-white/5 flex flex-col">
        <div className="p-6 h-16 flex items-center justify-between border-b border-white/5">
           <h2 className="font-bold text-lg">Messages</h2>
           <button className="text-blue-500"><Edit3 size={20} /></button>
        </div>
        <div className="p-4 border-b border-white/5">
           <div className="bg-white/5 rounded-xl h-10 px-4 flex items-center gap-3">
              <Search size={16} className="text-white/20" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs w-full" />
           </div>
        </div>
        <div className="flex-1 overflow-auto">
           {contacts.map((c, i) => (
              <div key={i} className={`p-5 flex gap-4 hover:bg-white/5 cursor-pointer transition-colors ${i === 0 ? 'bg-white/5' : ''}`}>
                 <div className="w-12 h-12 rounded-full bg-slate-800 shrink-0 overflow-hidden">
                    <img src={`https://picsum.photos/100/100?u=${c.name}`} alt="" />
                 </div>
                 <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <h4 className="font-bold text-sm truncate">{c.name}</h4>
                       <span className="text-[10px] text-white/30">{c.time}</span>
                    </div>
                    <p className={`text-xs truncate ${c.unread > 0 ? 'text-white font-medium' : 'text-white/40'}`}>{c.last}</p>
                 </div>
                 {c.unread > 0 && <div className="w-2 h-2 rounded-full bg-blue-500 self-center"></div>}
              </div>
           ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[#050505]">
         <div className="h-16 border-b border-white/5 flex items-center px-8 justify-between">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                  <img src="https://picsum.photos/100/100?u=Alex" alt="" />
               </div>
               <h3 className="font-bold">Alex Thompson</h3>
            </div>
         </div>

         <div className="flex-1 p-8 overflow-auto space-y-6">
            <div className="flex gap-4">
               <div className="max-w-[70%] p-4 bg-white/5 border border-white/5 rounded-2xl rounded-tl-none">
                  <p className="text-sm">Hey! Are we still on for the Studio OS presentation later today?</p>
                  <span className="text-[9px] text-white/20 mt-2 block uppercase font-bold tracking-widest">Sent 10:40</span>
               </div>
            </div>
            <div className="flex justify-end gap-4">
               <div className="max-w-[70%] p-4 bg-blue-600 rounded-2xl rounded-tr-none">
                  <p className="text-sm">Absolutely. Everything is prepared and the Gemini integration is flawless.</p>
                  <span className="text-[9px] text-white/40 mt-2 block uppercase font-bold tracking-widest">Read 10:41</span>
               </div>
            </div>
         </div>

         <div className="p-6 border-t border-white/5">
            <div className="bg-white/5 rounded-2xl p-2 flex items-center gap-2">
               <button className="p-2 text-white/40 hover:text-white transition-colors"><Mic size={20} /></button>
               <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent border-none outline-none py-2 px-2 text-sm" />
               <div className="flex items-center gap-1">
                  <button className="p-2 text-white/40 hover:text-white transition-colors"><Image size={20} /></button>
                  <button className="p-2 text-white/40 hover:text-white transition-colors"><Smile size={20} /></button>
                  <button className="p-2 bg-blue-600 text-white rounded-xl ml-1"><Send size={18} /></button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MessagesApp;
