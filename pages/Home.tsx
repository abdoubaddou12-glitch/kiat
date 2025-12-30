
import React, { useState } from 'react';
import { POSTS } from '../constants';
import PostCard from '../components/PostCard';
import { Sparkles, Zap, TrendingUp, ShoppingBag, Gift } from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('الكل');
  const categories = ['الكل', 'أجهزة ذكية', 'موضة وأزياء', 'أدوات منزلية'];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-10 pb-20 hero-bg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-black mb-10 animate-pulse">
            <Gift size={16} /> صفقات اليوم وصلت! خصومات حتى 90%
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tight">
            وفر <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-600">أكثر</span> مع عبدو ديلز.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            نحن نبحث لك عن أفضل العروض والخصومات في تيمو، أمازون، وعلي إكسبريس ونضعها بين يديك مع كوبونات حصرية.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-12 py-5 rounded-[2rem] font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              <ShoppingBag /> تصفح العروض
            </button>
            <div className="flex -space-x-4 space-x-reverse items-center rtl:space-x-reverse">
               <img className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" alt="user" />
               <img className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" alt="user" />
               <img className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900" src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" alt="user" />
               <div className="pr-6 font-bold text-sm opacity-60">+20k متسوق وفروا معنا</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-2 text-right">
          <h2 className="text-4xl font-black flex items-center gap-4 justify-end">
            <TrendingUp className="text-red-500" /> صفقات نوصي بها
          </h2>
          <p className="text-slate-500 font-bold opacity-60">منتجات تم فحص جودتها وأسعارها بدقة</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-black transition-all ${
                activeTab === cat 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-500/20' 
                  : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {POSTS.filter(p => activeTab === 'الكل' || p.category === activeTab).map((post, idx) => (
          <div key={post.id} className="animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
            <PostCard post={post} />
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8">لا تفوت صفقة واحدة بعد الآن!</h2>
          <p className="text-xl text-indigo-100 mb-12 opacity-80">نرسل لك أفضل 5 عروض يومية مختارة بعناية لتناسب ميزانيتك.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني للحصول على الأكواد"
              className="flex-grow bg-white/10 border border-white/10 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-lg placeholder:text-slate-400"
            />
            <button className="bg-red-600 text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3">
              <Zap size={22} fill="currentColor" /> سجلني الآن
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
