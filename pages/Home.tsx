
import React, { useState } from 'react';
import { POSTS } from '../constants';
import PostCard from '../components/PostCard';
import { Sparkles, Zap, TrendingUp, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('الكل');
  const categories = ['الكل', 'Technology', 'Artificial Intelligence', 'Design'];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-black mb-10 animate-fade-in">
            <Sparkles size={16} /> مدونة تقنية برؤية مستقبلية
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tight animate-in slide-in-from-bottom-8 duration-700">
            مستقبل <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">الويب</span> يبدأ من هنا.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            نحن هنا لنلهمك، نعلمك، ونقودك في رحلتك لاستكشاف أحدث ما توصلت إليه التكنولوجيا والذكاء الاصطناعي.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all">
              اكتشف المقالات
            </button>
            <button className="w-full sm:w-auto flex items-center gap-3 font-black text-lg group">
              انضم إلينا <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all"><ChevronRight size={20} className="rotate-180" /></div>
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-black flex items-center gap-4 italic">
            <TrendingUp className="text-indigo-600" /> المقالات الأحدث
          </h2>
          <p className="text-slate-500 font-bold opacity-60">كل ما هو جديد في عالم الابتكار الرقمي</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-black transition-all ${
                activeTab === cat 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20' 
                  : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-indigo-300'
              }`}
            >
              {cat === 'Technology' ? 'تقنية' : cat === 'Artificial Intelligence' ? 'ذكاء اصطناعي' : cat === 'Design' ? 'تصميم' : 'الكل'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {POSTS.filter(p => activeTab === 'الكل' || p.category === activeTab).map((post, idx) => (
          <div key={post.id} className="animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
            <PostCard post={post} />
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-900 dark:bg-indigo-950 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden text-center md:text-right">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">كن أول من يعرف <br/><span className="text-indigo-400">عن كل جديد.</span></h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              نشرة بريدية أسبوعية تصلك مباشرة إلى صندوق الوارد الخاص بك، تحتوي على أفضل المقالات، المصادر، والنصائح البرمجية.
            </p>
          </div>
          <form className="lg:w-2/5 w-full flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني"
              className="flex-grow bg-white/10 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg placeholder:text-slate-500"
            />
            <button className="bg-white text-indigo-900 px-10 py-5 rounded-3xl font-black text-lg hover:bg-indigo-50 active:scale-95 transition-all flex items-center justify-center gap-3">
              <Zap size={22} fill="currentColor" /> اشتراك
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
