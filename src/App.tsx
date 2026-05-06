/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  GraduationCap, 
  Building2, 
  UserRound, 
  ClipboardCheck,
  ChevronLeft,
  CirclePlay,
  Volume2,
  Fingerprint
} from 'lucide-react';

export default function App() {
  const [isEntered, setIsEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => {
        console.warn("Audio play blocked or file not found:", e);
      });
    }
    setIsEntered(true);
  };

  const schoolStats = [
    { grade: 'الأول', students: 113, sections: 4 },
    { grade: 'الثاني', students: 107, sections: 4 },
    { grade: 'الثالث', students: 106, sections: 4 },
    { grade: 'الرابع', students: 141, sections: 5 },
  ];

  const totalStudents = schoolStats.reduce((acc, curr) => acc + curr.students, 0);
  const totalSections = schoolStats.reduce((acc, curr) => acc + curr.sections, 0);

  return (
    <div className="min-h-screen relative overflow-hidden" dir="rtl">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {!isEntered ? (
          <motion.div
            key="entry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 h-screen flex flex-col items-center justify-center p-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md w-full glass-panel p-12 rounded-[2rem] flex flex-col items-center gap-8"
            >
              <div className="w-24 h-24 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                <GraduationCap size={48} />
              </div>
              
              <div>
                <h1 className="text-4xl text-slate-800 mb-4 tracking-tight leading-tight">
                  مرحباً بكم في <br />
                  <span className="text-brand-primary">ملتقى نبراس اليوم قادة المستقبل</span>
                </h1>
                <p className="text-slate-500 text-lg">اضغط هنا لافتتاح المعرض</p>
              </div>

              <div className="mt-4 flex flex-col items-center gap-4">
                <motion.div
                  onClick={handleEnter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="fingerprint-btn w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-brand-primary/20 animate-pulse-glow"
                >
                  <Fingerprint size={64} className="text-brand-primary" />
                </motion.div>
                <p className="text-brand-secondary font-medium animate-pulse">اضغط بالبصمة للدخول</p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 max-w-6xl mx-auto p-6 md:p-12 mb-12 flex flex-col min-h-screen"
          >
            {/* Header Section */}
            <motion.header
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 gradient-header rounded-2xl flex items-center justify-center shadow-lg shadow-green-100">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-brand-dark tracking-tight">مدرسة نبراس الخير للتعليم الأساسي</h1>
                  <p className="text-sm text-gray-500 font-medium">العام الدراسي ٢٠٢٥ / ٢٠٢٦ م</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-green-50 text-brand-primary border border-green-100 rounded-full text-xs font-bold">
                  العام الدراسي ٢٠٢٥ / ٢٠٢٦ م
                </div>
                <div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-bold">
                  مسقط، سلطنة عمان
                </div>
              </div>
            </motion.header>

            {/* Main Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
              
              {/* Primary Vision Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="md:col-span-8 md:row-span-2 bento-card bg-[#F1F8F4] border-green-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-brand-dark mb-2">رؤيتنا التعليمية</h2>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg font-medium">
                      "جيل تقني واع يعتز بهويته الوطنية في ظل شراكة مجتمعية فاعلة"
                    </p>
                  </div>
                  <span className="text-5xl opacity-20">✨</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-green-700 shadow-sm border border-green-100">تميز أكاديمي</span>
                  <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-green-700 shadow-sm border border-green-100">قيم أخلاقية</span>
                  <span className="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-green-700 shadow-sm border border-green-100">بيئة محفزة</span>
                </div>
              </motion.div>

              {/* Total Stats Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 md:row-span-2 bento-card gradient-header text-white"
              >
                <div className="flex flex-col h-full justify-between">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-wider">إجمالي عدد الطلبة</p>
                  <div className="py-2">
                    <span className="text-7xl font-black">{totalStudents}</span>
                    <span className="text-xl font-medium mr-2">طالب وطالبة</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="text-xs font-medium">عدد الشعب الدراسية</span>
                    <span className="text-sm font-bold">{totalSections} شعبة</span>
                  </div>
                </div>
              </motion.div>

              {/* Staff Breakdown Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="md:col-span-4 md:row-span-4 bento-card"
              >
                <h3 className="text-lg font-bold mb-6 border-b border-slate-100 pb-2">الهيئة الإدارية والتدريسية</h3>
                <div className="space-y-6 flex-grow flex flex-col justify-center">
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🏢</div>
                      <div>
                        <p className="text-sm font-bold">الإدارة</p>
                        <p className="text-xs text-gray-400">قيادة مؤسسية</p>
                      </div>
                    </div>
                    <span className="text-2xl font-black text-blue-600">٠٥</span>
                  </div>
                  
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">👩‍🏫</div>
                      <div>
                        <p className="text-sm font-bold">المعلمات</p>
                        <p className="text-xs text-gray-400">كادر تعليمي متخصص</p>
                      </div>
                    </div>
                    <span className="text-2xl font-black text-orange-600">٤٠</span>
                  </div>

                  <div className="mt-8 p-4 bg-slate-50 rounded-2xl">
                    <p className="text-xs font-bold text-gray-500 mb-3 block">متوسط الخبرة في المدرسة</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-brand-primary h-full" 
                      />
                    </div>
                    <p className="text-left text-[10px] mt-2 text-gray-400 font-bold tracking-tight">٨٥٪ من الكادر بخبرة تزيد عن ٥ سنوات</p>
                  </div>

                  <button 
                    onClick={() => setIsEntered(false)}
                    className="mt-4 flex items-center justify-center gap-2 text-slate-400 hover:text-brand-primary transition-colors font-bold text-sm"
                  >
                    <ChevronLeft className="rotate-180" size={16} />
                    العودة للرئيسية
                  </button>
                </div>
              </motion.div>

              {/* Stats Table Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="md:col-span-8 md:row-span-4 bento-card p-0 overflow-hidden"
              >
                <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                  <span className="font-bold text-brand-dark text-sm">توزيع الطلبة حسب المستويات</span>
                  <span className="text-[10px] font-bold text-slate-400">تحديث: مايو ٢٠٢٤</span>
                </div>
                <table className="w-full text-right">
                  <thead>
                    <tr className="bg-slate-50/50">
                      <th className="py-4 px-6 text-sm font-bold text-gray-500">الصف الدراسي</th>
                      <th className="py-4 px-6 text-center text-sm font-bold text-gray-500">عدد الطلبة</th>
                      <th className="py-4 px-6 text-center text-sm font-bold text-gray-500">عدد الشعب</th>
                      <th className="py-4 px-6 text-center text-sm font-bold text-gray-500">الحالة</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {schoolStats.map((stat, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-6 font-bold text-slate-700">الصف {stat.grade}</td>
                        <td className="py-4 px-6 text-center font-black text-brand-primary text-lg">{stat.students}</td>
                        <td className="py-4 px-6 text-center font-medium text-slate-500 italic">{stat.sections}</td>
                        <td className="py-4 px-6 text-center">
                           <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">مكتمل</span>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-green-50/50">
                      <td className="py-4 px-6 font-black text-brand-dark">الإجمالي</td>
                      <td className="py-4 px-6 text-center font-black text-brand-dark text-xl">{totalStudents}</td>
                      <td className="py-4 px-6 text-center font-black text-brand-dark text-xl">{totalSections}</td>
                      <td className="py-4 px-6 text-center">—</td>
                    </tr>
                  </tbody>
                </table>

                {/* Floating Widget (Audio) inside grid slot as footer element of this card or separate widget */}
                <div className="mt-auto border-t border-slate-100 p-4 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <button 
                        onClick={() => audioRef.current?.play()}
                        className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white"
                      >
                        <Volume2 size={16} />
                      </button>
                      <span className="text-xs font-bold text-slate-500">رسالة ترحيبية صوتية</span>
                   </div>
                   <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => (
                        <motion.div 
                          key={i}
                          animate={{ height: [4, 12, 4] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 bg-brand-primary rounded-full"
                        />
                      ))}
                   </div>
                </div>
              </motion.div>

            </div>

            <footer className="mt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest gap-4">
              <p>© ٢٠٢٤ مدرسة نبراس الخير للتعليم الأساسي. جميع الحقوق محفوظة.</p>
              <div className="flex gap-6">
                <span>نظام الإدارة المدرسية v٢.٤</span>
                <span>آخر تحديث: اليوم، ٠٨:٣٠ صباحاً</span>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio element - hidden */}
      <audio 
        ref={audioRef} 
        src="/audio.mp3" 
        className="hidden"
        preload="auto"
      />
    </div>
  );
}
