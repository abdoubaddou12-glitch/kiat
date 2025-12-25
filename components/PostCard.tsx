
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
      className={`group relative flex flex-col h-full bg-white dark:bg-slate-800/40 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 ${isArabic ? 'text-right' : 'text-left'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="relative h-64 overflow-hidden">
        <Link to={`/post/${post.id}`}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 post-card-gradient opacity-60 group-hover:opacity-80 transition-opacity"></div>
        </Link>
        <div className="absolute top-4 right-4">
          <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur shadow-sm rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-600">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="flex items-center gap-4 mb-4 opacity-50 text-[10px] font-bold">
          <span className="flex items-center gap-1.5 uppercase tracking-wider"><Calendar size={12} /> {post.date}</span>
          <span className="flex items-center gap-1.5 uppercase tracking-wider"><Clock size={12} /> {post.readTime}</span>
        </div>

        <Link to={`/post/${post.id}`}>
          <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors leading-[1.4]">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} className="w-8 h-8 rounded-full border border-white shadow-sm" alt={post.author.name} />
            <span className="text-xs font-bold opacity-70">{post.author.name}</span>
          </div>
          <Link 
            to={`/post/${post.id}`} 
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
