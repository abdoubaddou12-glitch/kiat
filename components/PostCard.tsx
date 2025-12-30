
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { ShoppingCart, Tag, ExternalLink, Percent } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article 
      className="group relative flex flex-col h-full bg-white dark:bg-slate-800/50 rounded-[2.5rem] overflow-hidden card-shadow border border-white/20 hover:-translate-y-2 transition-all duration-500 text-right"
      dir="rtl"
    >
      <div className="relative h-64 overflow-hidden">
        <Link to={`/post/${post.id}`}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
        </Link>
        
        {/* Discount Badge */}
        {post.discount && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-2xl font-black flex items-center gap-1 shadow-lg animate-pulse">
            <Percent size={14} /> {post.discount} خصم
          </div>
        )}

        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-black/60 backdrop-blur-md text-white rounded-xl text-[10px] font-black uppercase tracking-widest">
            {post.brand}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-bold">
            {post.category}
          </span>
        </div>

        <Link to={`/post/${post.id}`}>
          <h3 className="text-xl font-black mb-4 group-hover:text-indigo-600 transition-colors leading-[1.4] h-14 overflow-hidden">
            {post.title}
          </h3>
        </Link>
        
        {/* Pricing Section */}
        <div className="flex items-end gap-3 mb-6">
          <span className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{post.price}</span>
          {post.originalPrice && (
            <span className="text-lg text-slate-400 line-through mb-1">{post.originalPrice}</span>
          )}
        </div>

        {/* Coupon Code Section */}
        {post.couponCode && (
          <div className="mb-6 p-3 bg-dashed border-2 border-indigo-200 dark:border-indigo-800 border-dashed rounded-2xl flex justify-between items-center bg-indigo-50/30">
            <span className="text-xs font-bold text-slate-500">كود الخصم:</span>
            <span className="text-sm font-black text-indigo-700 dark:text-indigo-300 tracking-widest">{post.couponCode}</span>
          </div>
        )}

        <div className="mt-auto flex gap-3">
          <a 
            href={post.affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-grow bg-indigo-600 text-white px-6 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-xl shadow-indigo-500/20 transition-all active:scale-95"
          >
            <ShoppingCart size={18} /> تسوق الآن
          </a>
          <Link 
            to={`/post/${post.id}`}
            className="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center hover:bg-slate-200 transition-all"
          >
            <ExternalLink size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
