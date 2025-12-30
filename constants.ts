
import { Post, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'أجهزة ذكية', slug: 'tech', color: 'blue' },
  { id: '2', name: 'موضة وأزياء', slug: 'fashion', color: 'purple' },
  { id: '3', name: 'أدوات منزلية', slug: 'home', color: 'pink' },
  { id: '4', name: 'جمال وعناية', slug: 'beauty', color: 'emerald' },
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'سماعات بلوتوث Pro Max إلغاء الضوضاء - عرض تيمو الحصري',
    excerpt: 'استمتع بنقاء صوت استثنائي مع أحدث سماعات تيمو بخصم يتجاوز 70% لفترة محدودة جداً.',
    content: `
# سماعات Pro Max اللاسلكية
تعتبر هذه السماعة الخيار الأفضل لمن يبحث عن جودة الصوت مقابل السعر.

## لماذا ننصح بها؟
- **عمر بطارية طويل**: يصل إلى 40 ساعة من التشغيل.
- **إلغاء الضوضاء**: تقنية ANC المتطورة.
- **سعر لا يقاوم**: بفضل كوبون الخصم الخاص بنا.

يمكنك الحصول عليها الآن عبر الرابط أدناه واستخدام الكود المرفق للحصول على خصم إضافي.
    `,
    author: {
      name: 'فريق الصفقات',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=deals',
      role: 'محلل عروض'
    },
    category: 'أجهزة ذكية',
    date: 'مارس 01, 2024',
    readTime: 'عرض محدود',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    tags: ['تيمو', 'سماعات', 'تكنولوجيا'],
    price: '49.00 SAR',
    originalPrice: '199.00 SAR',
    discount: '75%',
    affiliateUrl: 'https://temu.to/m/example',
    couponCode: 'ABD20',
    brand: 'Temu'
  },
  {
    id: '2',
    title: 'ماكينة قهوة احترافية منزلية - توفير أمازون',
    excerpt: 'ابدأ صباحك بأفضل كوب قهوة مع ماكينة الإسبريسو المتطورة، الآن بسعر مخفض جداً.',
    content: `
# ماكينة قهوة Espresso Master
هل تحلم بقهوة المقهى في منزلك؟ هذه الماكينة توفر لك ذلك بضغطة زر واحدة.

## المميزات:
1. ضغط 15 بار لكريمة مثالية.
2. خزان مياه كبير سهل التنظيف.
3. ضمان لمدة سنتين.
    `,
    author: {
      name: 'أحمد وفر',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed',
      role: 'خبير تسوق'
    },
    category: 'أدوات منزلية',
    date: 'مارس 02, 2024',
    readTime: 'شحن مجاني',
    coverImage: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=800',
    tags: ['أمازون', 'قهوة', 'منزل'],
    price: '299.00 SAR',
    originalPrice: '550.00 SAR',
    discount: '45%',
    affiliateUrl: 'https://amazon.sa/example',
    couponCode: 'SAVE10',
    brand: 'Amazon'
  },
  {
    id: '3',
    title: 'ساعة ذكية Ultra Series 9 - خصم علي إكسبريس',
    excerpt: 'الساعة الأكثر طلباً عالمياً بمواصفات جبارة وسعر لا يصدق. مقاومة للماء وتدعم المكالمات.',
    content: `
# ساعة Ultra Smart Watch
التصميم الأنيق يلتقي مع القوة. تابع صحتك ولياقتك البدنية بكل سهولة.

## المواصفات:
- شاشة AMOLED ساطعة.
- مراقبة نبضات القلب والأكسجين.
- متوافقة مع جميع الهواتف.
    `,
    author: {
      name: 'فريق الصفقات',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=deals2',
      role: 'محلل عروض'
    },
    category: 'أجهزة ذكية',
    date: 'مارس 03, 2024',
    readTime: 'أكثر مبيعاً',
    coverImage: 'https://images.unsplash.com/photo-1544117518-30df57809ca1?auto=format&fit=crop&q=80&w=800',
    tags: ['علي إكسبريس', 'ساعات', 'رياضة'],
    price: '85.00 SAR',
    originalPrice: '250.00 SAR',
    discount: '66%',
    affiliateUrl: 'https://aliexpress.com/example',
    couponCode: 'WATCH5',
    brand: 'AliExpress'
  }
];
