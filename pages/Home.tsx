
import React, { useState } from 'react';
import { POSTS } from '../constants';
import PostCard from '../components/PostCard';
import { Sparkles, TrendingUp, Zap, Filter } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('الكل');
  
  const categories = ['الكل', 'Technology', 'Artificial Intelligence', 'Design'];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 hero-gradient rounded-[40px] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:invert"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-8 animate-bounce">
            <Sparkles size={14} /> أكثر من 50,000 قارئ شهرياً
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
            نكتب <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">مستقبل التقنية</span> بكل شغف.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            مدونة متخصصة في سبر أغوار العالم الرقمي، نقدم لك رؤى عميقة ودروساً احترافية تساعدك على التميز في مسيرتك المهنية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold shadow-2xl shadow-indigo-500/30 hover:scale-105 transition-all">
              ابدأ القراءة
            </button>
            <button className="bg-white dark:bg-slate-800 px-10 py-4 rounded-2xl font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all">
              تعرف علينا
            </button>
          </div>
        </div>
      </section>

      {/* Featured Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
            <TrendingUp className="text-indigo-600" /> آخر التحديثات
          </h2>
          <p className="opacity-60 text-sm">اكتشف أحدث المقالات التي تمت إضافتها مؤخراً</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
          <Filter size={18} className="text-slate-400 ml-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === cat 
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' 
                  : 'bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200'
              }`}
            >
              {cat === 'Technology' ? 'تقنية' : cat === 'Artificial Intelligence' ? 'ذكاء اصطناعي' : cat === 'Design' ? 'تصميم' : 'الكل'}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {POSTS.filter(p => activeTab === 'الكل' || p.category === activeTab).map((post, idx) => (
          <div key={post.id} className="animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${idx * 100}ms` }}>
            <PostCard post={post} />
          </div>
        ))}
      </section>

      {/* Newsletter Widget */}
      <section className="bg-indigo-600 rounded-[40px] p-10 md:p-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">ابقَ على اطلاع دائم.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed opacity-90">
              انضم إلى قائمة بريدية حصرية تضم أكثر من 20 ألف مطور ومصمم. نرسل زبدة القول في التقنية مرة واحدة أسبوعياً.
            </p>
          </div>
          <form className="flex gap-3" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني"
              className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 focus:outline-none focus:bg-white/20 transition-all placeholder:text-indigo-200"
            />
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2">
              <Zap size={18} fill="currentColor" /> اشتراك
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
