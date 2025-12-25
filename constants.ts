
import { Post, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Technology', slug: 'tech', color: 'blue' },
  { id: '2', name: 'Artificial Intelligence', slug: 'ai', color: 'purple' },
  { id: '3', name: 'Design', slug: 'design', color: 'pink' },
  { id: '4', name: 'Business', slug: 'business', color: 'emerald' },
  { id: '5', name: 'Lifestyle', slug: 'lifestyle', color: 'orange' },
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'The Future of AI in Modern Software Development',
    excerpt: 'Explore how large language models and generative AI are reshaping the way we write code and build applications.',
    content: `
# The Revolution of Generative AI

Artificial intelligence is no longer a futuristic concept; it's a present reality that's transforming every industry. In the world of software development, we're seeing a massive shift.

## Key Changes:
- **Code Assistance**: AI like Copilot is becoming an essential teammate.
- **Automated Testing**: Writing unit tests is faster than ever.
- **Architectural Insights**: AI can help map out complex system dependencies.

The key to succeeding in this new era is not to compete with AI, but to master it. Engineers who leverage these tools effectively will be 10x more productive.

### Conclusion
As we move forward, the "human in the loop" will remain critical for ethical considerations and complex problem-solving that requires nuanced context.
    `,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      role: 'Principal Engineer'
    },
    category: 'Artificial Intelligence',
    date: 'Oct 24, 2023',
    readTime: '6 min read',
    coverImage: 'https://picsum.photos/seed/tech/1200/600',
    tags: ['AI', 'Development', 'Future']
  },
  {
    id: '2',
    title: 'مستقبل تطوير الويب في عام 2024',
    excerpt: 'نظرة متعمقة على أهم التقنيات والاتجاهات التي ستشكل ملامح تطوير الويب في العام القادم.',
    content: `
# تطوير الويب في 2024

يشهد عالم الويب تطوراً متسارعاً لا يتوقف. من أطر العمل الجديدة إلى تقنيات التحسين المستمر.

## أبرز التوجهات:
1. **السرعة الفائقة**: التركيز على مقاييس Core Web Vitals.
2. **الذكاء الاصطناعي**: دمج ميزات الذكاء الاصطناعي مباشرة في واجهات المستخدم.
3. **التصميم التفاعلي**: استخدام Framer Motion و GSAP بشكل أوسع.

### الخلاصة
المطور الناجح هو من يواكب هذه التغيرات بحذر وذكاء، مع التركيز دائماً على تجربة المستخدم النهائية.
    `,
    author: {
      name: 'أحمد علي',
      avatar: 'https://picsum.photos/seed/ahmed/100/100',
      role: 'مطور واجهات أول'
    },
    category: 'Technology',
    date: 'نوفمبر 10, 2023',
    readTime: '5 دقائق للقراءة',
    coverImage: 'https://picsum.photos/seed/web/1200/600',
    tags: ['الويب', 'برمجة', '2024']
  },
  {
    id: '3',
    title: 'Mastering Minimalist UI Design',
    excerpt: 'Less is more. Learn the principles of minimalist design and how it can improve your conversion rates and user satisfaction.',
    content: `
# Minimalism in Design

Minimalism is about focusing on the essentials. It's not just about whitespace; it's about hierarchy and purpose.

## Principles:
- **Whitespace**: Give your elements room to breathe.
- **Typography**: Let the text speak for itself.
- **Color Contrast**: Use color sparingly for impact.

When done right, minimalist design reduces cognitive load and allows users to find what they need faster.
    `,
    author: {
      name: 'Julian Vane',
      avatar: 'https://picsum.photos/seed/julian/100/100',
      role: 'UI Designer'
    },
    category: 'Design',
    date: 'Dec 05, 2023',
    readTime: '4 min read',
    coverImage: 'https://picsum.photos/seed/design/1200/600',
    tags: ['Design', 'UI/UX', 'Minimalism']
  }
];
