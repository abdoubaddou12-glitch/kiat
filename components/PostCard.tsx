
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const isArabic = /[\u0600-\u06FF]/.test(post.title);

  return (
    <article 
      className={`group relative flex flex-col h-full bg-white dark:bg-slate-800/50 rounded-[2.5rem] overflow-hidden card-shadow border border-white/20 hover:-translate-y-3 transition-all duration-500 ${isArabic ? 'text-right' : 'text-left'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="relative h-72 overflow-hidden">
        <Link to={`/post/${post.id}`}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Link>
        <div className="absolute top-6 right-6">
          <span className="px-5 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-2xl text-[11px] font-black uppercase tracking-tighter text-indigo-600 shadow-xl">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-grow">
        <div className="flex items-center gap-5 mb-6 text-[11px] font-black opacity-40 uppercase tracking-widest">
          <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
        </div>

        <Link to={`/post/${post.id}`}>
          <h3 className="text-2xl font-black mb-6 group-hover:text-indigo-600 transition-colors leading-[1.3] tracking-tight">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 line-clamp-3 font-medium opacity-80">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={post.author.avatar} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800" alt={post.author.name} />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
            </div>
            <span className="text-sm font-black opacity-70">{post.author.name}</span>
          </div>
          <Link 
            to={`/post/${post.id}`} 
            className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-12 transition-all shadow-sm"
          >
            <ArrowUpRight size={22} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
