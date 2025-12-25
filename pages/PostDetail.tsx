
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS } from '../constants';
import { aiService } from '../services/gemini';
import { ArrowLeft, Clock, Calendar, Share2, Bot, Loader2, User } from 'lucide-react';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = POSTS.find(p => p.id === id);
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <Link to="/" className="text-indigo-600 mt-4 block">Back to home</Link>
      </div>
    );
  }

  const isArabic = /[\u0600-\u06FF]/.test(post.title);

  const generateAISummary = async () => {
    setLoadingSummary(true);
    const result = await aiService.summarizePost(post.content, isArabic ? 'ar' : 'en');
    setSummary(result || "Could not generate summary.");
    setLoadingSummary(false);
  };

  return (
    <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8 group">
        <ArrowLeft size={18} className={`group-hover:-translate-x-1 transition-transform ${isArabic ? 'rotate-180 group-hover:translate-x-1' : ''}`} />
        {isArabic ? 'العودة للمقالات' : 'Back to Posts'}
      </Link>

      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-500">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full font-bold">
              {post.category}
            </span>
            <div className="flex items-center gap-1"><Calendar size={16} /> {post.date}</div>
            <div className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-y border-slate-100 dark:border-slate-800 py-6">
            <div className="flex items-center gap-4">
              <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20" />
              <div>
                <p className="font-bold">{post.author.name}</p>
                <p className="text-sm text-slate-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:text-indigo-600 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </header>

        <img src={post.coverImage} alt="" className="w-full h-[400px] object-cover rounded-3xl mb-12 shadow-2xl shadow-indigo-500/10" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Post Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none prose-slate prose-headings:font-black prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-img:rounded-2xl">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-black mb-6 mt-10">{line.replace('# ', '')}</h1>;
                if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-black mb-4 mt-8">{line.replace('## ', '')}</h2>;
                if (line.startsWith('### ')) return <h3 key={i} className="text-2xl font-bold mb-3 mt-6">{line.replace('### ', '')}</h3>;
                if (line.startsWith('- ')) return <li key={i} className="mb-2 list-disc list-inside">{line.replace('- ', '')}</li>;
                if (line.startsWith('1. ')) return <li key={i} className="mb-2 list-decimal list-inside">{line.replace('1. ', '')}</li>;
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">{line}</p>;
              })}
            </div>

            <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800">
               <h4 className="font-bold mb-4">{isArabic ? 'الوسوم' : 'Tags'}</h4>
               <div className="flex flex-wrap gap-2">
                 {post.tags.map(tag => (
                   <span key={tag} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 cursor-pointer transition-colors">#{tag}</span>
                 ))}
               </div>
            </div>
          </div>

          {/* Sidebar / AI Feature */}
          <aside className="lg:col-span-1 space-y-8">
            <div className="glass p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 sticky top-24">
              <div className="flex items-center gap-2 mb-4 text-indigo-600 dark:text-indigo-400">
                <Bot size={20} />
                <h3 className="font-bold">{isArabic ? 'ملخص الذكاء الاصطناعي' : 'AI Summary'}</h3>
              </div>
              
              {!summary && !loadingSummary && (
                <button 
                  onClick={generateAISummary}
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold transition-all"
                >
                  {isArabic ? 'توليد ملخص ذكي' : 'Generate Smart Summary'}
                </button>
              )}

              {loadingSummary && (
                <div className="flex flex-col items-center justify-center py-4 space-y-2 text-slate-500">
                  <Loader2 className="animate-spin" size={24} />
                  <p className="text-xs">{isArabic ? 'جاري التحليل...' : 'Analyzing content...'}</p>
                </div>
              )}

              {summary && (
                <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line animate-in fade-in duration-500">
                  {summary}
                </div>
              )}
            </div>

            <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-2xl">
              <h3 className="font-bold mb-4">{isArabic ? 'عن الكاتب' : 'About Author'}</h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-500 italic">"Expert in technology and software architecture with over 10 years of experience."</p>
                <div className="flex gap-2">
                   <button className="text-xs font-bold text-indigo-600">Follow</button>
                   <button className="text-xs font-bold text-indigo-600">Profile</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
