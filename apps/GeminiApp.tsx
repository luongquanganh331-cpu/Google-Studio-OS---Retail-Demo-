
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, BrainCircuit, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  content: string;
}

const GeminiApp: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm Gemini, your Studio OS AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are the core intelligence of Studio OS. Be professional, concise, and helpful. Format your responses using markdown where appropriate.",
          temperature: 0.7
        }
      });

      setMessages(prev => [...prev, { role: 'model', content: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: "Connection Error: Please check your API configuration." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#050505] text-white">
      <div className="h-16 border-b border-white/5 flex items-center px-8 justify-between bg-black/40">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-500/20">
            <Sparkles size={20} />
          </div>
          <h2 className="font-bold tracking-tight">Gemini Core</h2>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
          <BrainCircuit size={12} /> Neural Processing Active
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-auto p-8 space-y-8 scroll-smooth">
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-xl ${m.role === 'model' ? 'bg-indigo-600' : 'bg-white/10'}`}>
              {m.role === 'model' ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className={`max-w-[80%] p-6 rounded-3xl leading-relaxed ${m.role === 'model' ? 'bg-white/5 border border-white/5' : 'bg-indigo-600/20 border border-indigo-500/20 text-indigo-50'}`}>
              <p className="text-sm whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-6 animate-pulse">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/40 flex items-center justify-center">
              <Loader2 className="animate-spin text-white/50" size={20} />
            </div>
            <div className="max-w-[80%] p-6 rounded-3xl bg-white/5 border border-white/5">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-8 bg-black/40 border-t border-white/5">
        <div className="max-w-4xl mx-auto flex gap-4">
          <div className="flex-1 relative">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Gemini anything..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl h-14 pl-6 pr-14 text-sm outline-none focus:bg-white/10 focus:border-indigo-500/50 transition-all placeholder:text-white/20"
            />
            <button 
              onClick={handleSend}
              className={`absolute right-3 top-3 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${input.trim() ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 hover:scale-105' : 'bg-white/5 text-white/20'}`}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiApp;
