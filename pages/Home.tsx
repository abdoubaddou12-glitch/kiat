
import React, { useState } from 'react';
import { POSTS, CATEGORIES } from '../constants';
import PostCard from '../components/PostCard';
import { Sparkles, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const filteredPosts = selectedCategory === 'الكل' 
    ? POSTS 
    : POSTS.filter(p => p.category === (selectedCategory === 'تكنولوجيا' ? 'Technology' : selectedCategory === 'ذكاء اصطناعي' ? 'Artificial Intelligence' : selectedCategory === 'تصميم' ? 'Design' : 'Lifestyle'));

  const featuredPost = POSTS[0];

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 md:p-16 text-right">
        <div className="absolute top-0 left-0 w-1/2 h-full opacity-30 pointer-events-none">
          <img src={featuredPost.coverImage} alt="" className="w-full h-full object-cover grayscale blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl mr-auto md:mr-0">
          <div className="flex items-center gap-2 mb-6 justify-start md:justify-end">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider rounded-full border border-indigo-500/30">
              <TrendingUp size={14} /> قصة مختارة
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            اكتشف مستقبل <span className="text-indigo-400">الابتكار</span> والذكاء الاصطناعي مع عبدو ويب.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed">
            رؤى تقنية، مقالات متعمقة، وآراء خبراء من أجل المحترف العصري، نأخذك في رحلة نحو عالم المستقبل.
          </p>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
              اقرأ آخر المقالات
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 px-8 py-3 rounded-xl font-bold transition-all">
              تصفح الأقسام
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-indigo-500" />
          <h2 className="text-2xl font-bold">استكشف المواضيع</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {['الكل', 'تكنولوجيا', 'ذكاء اصطناعي', 'تصميم', 'الأعمال'].map(catName => (
            <button 
              key={catName}
              onClick={() => setSelectedCategory(catName)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === catName 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none' 
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="bg-indigo-50 dark:bg-indigo-900/10 rounded-3xl p-8 md:p-12 text-center border border-indigo-100 dark:border-indigo-900/30">
        <h2 className="text-3xl font-bold mb-4">لا تفوت أي تحديث</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          انضم إلى أكثر من 50,000 مشترك واحصل على أحدث المقالات، موارد التصميم، ورؤى التكنولوجيا مباشرة في بريدك الإلكتروني كل أسبوع.
        </p>
        <form className="flex flex-col sm:flex-row-reverse gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="أدخل بريدك الإلكتروني" 
            className="flex-grow px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-right"
          />
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
            اشترك
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
