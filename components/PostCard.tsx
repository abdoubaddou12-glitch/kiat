
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const isArabic = /[\u0600-\u06FF]/.test(post.title);

  return (
    <article 
      className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col ${isArabic ? 'text-right' : 'text-left'}`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Link to={`/post/${post.id}`} className="block overflow-hidden h-48 sm:h-64">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full">
            {post.category}
          </span>
        </div>

        <Link to={`/post/${post.id}`}>
          <h2 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-50 dark:border-slate-700 flex items-center justify-between text-slate-500 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
          <Link to={`/post/${post.id}`} className="text-indigo-600 hover:text-indigo-700 font-bold flex items-center gap-1">
            {isArabic ? 'اقرأ المزيد' : 'Read More'}
            <ArrowRight size={14} className={isArabic ? 'rotate-180' : ''} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
