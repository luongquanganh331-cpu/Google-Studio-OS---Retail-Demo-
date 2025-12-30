
import React, { useState } from 'react';

const CalculatorApp: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleDigit = (digit: string) => {
    setDisplay(prev => prev === '0' ? digit : prev + digit);
  };

  const handleOp = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <div className="h-full flex items-center justify-center bg-black p-10">
      <div className="w-[340px] glass-dark p-8 rounded-[48px] border border-white/10 shadow-2xl">
        <div className="text-right mb-10 px-4">
          <div className="text-white/30 text-xs font-bold uppercase tracking-widest mb-2 h-4">{equation}</div>
          <div className="text-6xl font-bold text-white tracking-tighter overflow-hidden truncate">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {buttons.flat().map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === 'C') clear();
                else if (btn === '=') calculate();
                else if (['÷', '×', '−', '+'].includes(btn)) handleOp(btn.replace('×', '*').replace('÷', '/').replace('−', '-'));
                else handleDigit(btn);
              }}
              className={`h-16 rounded-3xl text-xl font-bold transition-all active:scale-90 flex items-center justify-center
                ${btn === '=' ? 'bg-indigo-600 text-white col-span-2' : 
                  ['÷', '×', '−', '+', 'C', '±', '%'].includes(btn) ? 'bg-white/10 text-indigo-400' : 'bg-white/5 text-white hover:bg-white/10'}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
