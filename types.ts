
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
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}
