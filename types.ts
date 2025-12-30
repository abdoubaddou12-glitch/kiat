
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  // Affiliate specific fields
  price?: string;
  originalPrice?: string;
  discount?: string;
  affiliateUrl: string;
  couponCode?: string;
  brand: 'Temu' | 'Amazon' | 'AliExpress' | 'Other';
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}
