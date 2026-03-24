/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, RefreshCw, HelpCircle, ChevronRight, Info, BookOpen } from 'lucide-react';
import { MAJOR_ARCANA, TarotCard } from './constants';
import { getTarotReading } from './services/geminiService';

// --- Components ---

const CardBack = () => (
  <div className="w-full h-full bg-slate-900 rounded-2xl border-4 border-amber-500/30 flex items-center justify-center overflow-hidden relative shadow-2xl">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
    <div className="z-10 flex flex-col items-center">
      <Sparkles className="w-12 h-12 text-amber-500 mb-2 animate-pulse" />
      <div className="text-amber-500/50 font-serif text-sm tracking-widest uppercase">Tarot</div>
    </div>
    {/* Decorative corners */}
    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500/40" />
    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-500/40" />
    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-500/40" />
    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500/40" />
  </div>
);

const CardFront = ({ card, isReversed }: { card: TarotCard; isReversed: boolean }) => (
  <div className="w-full h-full bg-white rounded-2xl border-4 border-amber-500/50 overflow-hidden shadow-2xl flex flex-col">
    <div className="relative flex-1 overflow-hidden">
      <img 
        src={card.image} 
        alt={card.name} 
        className={`w-full h-full object-cover transition-transform duration-700 ${isReversed ? 'rotate-180' : ''}`}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <h3 className="text-white text-2xl font-serif font-bold tracking-wide drop-shadow-lg">
          {card.name}
        </h3>
        <p className="text-amber-200 text-xs uppercase tracking-widest font-medium">
          {card.nameEn} {isReversed && '(逆位)'}
        </p>
      </div>
    </div>
  </div>
);

export default function App() {
  const [step, setStep] = useState<'start' | 'drawing' | 'result'>('start');
  const [question, setQuestion] = useState('');
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const [isReversed, setIsReversed] = useState(false);
  const [reading, setReading] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const drawCard = useCallback(async () => {
    if (step === 'drawing') return;
    
    setStep('drawing');
    setReading('');
    
    // Simulate shuffling/drawing delay
    setTimeout(async () => {
      const randomIndex = Math.floor(Math.random() * MAJOR_ARCANA.length);
      const card = MAJOR_ARCANA[randomIndex];
      const reversed = Math.random() > 0.7; // 30% chance of reversed
      
      setSelectedCard(card);
      setIsReversed(reversed);
      setStep('result');
      
      if (question.trim()) {
        setIsLoading(true);
        try {
          const aiReading = await getTarotReading(question, card, reversed);
          setReading(aiReading || '');
        } catch (error) {
          console.error("AI Reading failed:", error);
          setReading("命运的迷雾暂时遮蔽了视线，请稍后再试。");
        } finally {
          setIsLoading(false);
        }
      }
    }, 1500);
  }, [question, step]);

  const reset = () => {
    setStep('start');
    setQuestion('');
    setSelectedCard(null);
    setReading('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 overflow-x-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-md mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4"
          >
            <Sparkles className="w-8 h-8 text-amber-500" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-serif font-bold tracking-tight text-amber-100 mb-2"
          >
            塔罗之语
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-sm tracking-widest uppercase"
          >
            Tarot Whisper • 探索未知的启示
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 flex flex-col"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 mb-8 backdrop-blur-sm">
                <label className="block text-amber-200/70 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center">
                  <HelpCircle className="w-3 h-3 mr-1" /> 你想问什么？(可选)
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="例如：我近期的事业运势如何？"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all resize-none h-32"
                />
              </div>

              <div className="flex-1 flex items-center justify-center mb-12">
                <div className="relative group cursor-pointer" onClick={drawCard}>
                  <div className="absolute -inset-4 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
                  <div className="w-48 h-72 relative">
                    <CardBack />
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="absolute -top-4 -right-4 bg-amber-500 text-slate-950 p-2 rounded-full shadow-lg"
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <button
                onClick={drawCard}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-5 rounded-2xl shadow-xl shadow-amber-500/10 transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
              >
                开始抽取 <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 'drawing' && (
            <motion.div
              key="drawing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <div className="relative w-48 h-72">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ rotate: 0, x: 0 }}
                    animate={{ 
                      rotate: (i - 2) * 15,
                      x: (i - 2) * 20,
                      y: Math.abs(i - 2) * 10
                    }}
                    className="absolute inset-0"
                    style={{ zIndex: 5 - i }}
                  >
                    <CardBack />
                  </motion.div>
                ))}
              </div>
              <motion.p 
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mt-12 text-amber-200/60 font-serif tracking-[0.2em] uppercase text-sm"
              >
                正在感应命运的流动...
              </motion.p>
            </motion.div>
          )}

          {step === 'result' && selectedCard && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col"
            >
              <div className="flex justify-center mb-8">
                <motion.div 
                  initial={{ rotateY: 180, scale: 0.8 }}
                  animate={{ rotateY: 0, scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 100 }}
                  className="w-56 h-84 perspective-1000"
                >
                  <CardFront card={selectedCard} isReversed={isReversed} />
                </motion.div>
              </div>

              <div className="space-y-6">
                <section className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4 text-amber-500">
                    <BookOpen className="w-5 h-5" />
                    <h2 className="font-serif text-xl">牌面释义</h2>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {selectedCard.description}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-800/50">
                      <span className="text-amber-500/70 text-[10px] uppercase tracking-widest block mb-1">关键词</span>
                      <p className="text-slate-200 font-medium">
                        {isReversed ? selectedCard.meaningReversed : selectedCard.meaningUpright}
                      </p>
                    </div>
                  </div>
                </section>

                {question && (
                  <section className="bg-slate-900/50 border border-amber-500/20 rounded-3xl p-6 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Sparkles className="w-12 h-12 text-amber-500" />
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-amber-500">
                      <Info className="w-5 h-5" />
                      <h2 className="font-serif text-xl">AI 深度解析</h2>
                    </div>
                    
                    {isLoading ? (
                      <div className="space-y-3">
                        <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse" />
                        <div className="h-4 bg-slate-800 rounded w-full animate-pulse" />
                        <div className="h-4 bg-slate-800 rounded w-5/6 animate-pulse" />
                      </div>
                    ) : (
                      <div className="text-slate-200 leading-relaxed whitespace-pre-wrap italic font-serif">
                        {reading}
                      </div>
                    )}
                  </section>
                )}

                <button
                  onClick={reset}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" /> 再次抽取
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-auto py-8 text-center text-slate-600 text-xs tracking-widest uppercase">
          &copy; 2026 Tarot Whisper • 仅供娱乐参考
        </footer>
      </main>
    </div>
  );
}
