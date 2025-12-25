
import React from 'react';
import { Target, Users, Zap, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700 text-right">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-8 leading-tight">إنارة طريق <span className="text-indigo-600">المعرفة</span> التقنية.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          تأسست مدونة عبدو ويب بمهمة واحدة: توفير رؤى عالية الجودة واحترافية في عالم التكنولوجيا والتصميم المتغير باستمرار، لتمكين المطورين والمصممين العرب.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Target className="text-indigo-500" />, title: 'مهمتنا', desc: 'تنسيق أفضل المحتوى الفكري للمبدعين والمهندسين.' },
          { icon: <Users className="text-pink-500" />, title: 'مجتمعنا', desc: 'أكثر من 100 ألف قارئ شهري من جميع أنحاء العالم العربي.' },
          { icon: <Zap className="text-yellow-500" />, title: 'ابتكارنا', desc: 'استخدام الذكاء الاصطناعي لتعزيز تجربة القراءة والكتابة.' },
          { icon: <Globe className="text-blue-500" />, title: 'عالمية', desc: 'رؤى من وجهات نظر متنوعة وخلفيات تقنية غنية.' },
        ].map((item, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all text-center">
            <div className="bg-slate-50 dark:bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-slate-900 text-white rounded-[40px] p-12 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 p-20 opacity-10 blur-3xl bg-indigo-500 rounded-full"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">لماذا عبدو ويب؟</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">بقيادة الخبراء</h4>
                  <p className="text-slate-400">كل مقال مكتوب أو مراجع من قبل مخضرمين في الصناعة بسجلات نجاح مثبتة.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">معزز بالذكاء الاصطناعي</h4>
                  <p className="text-slate-400">نستخدم أحدث نماذج الذكاء الاصطناعي للمساعدة في تلخيص وترجمة بياناتنا.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">تجربة نظيفة</h4>
                  <p className="text-slate-400">لا نوافذ منبثقة، لا إعلانات مزعجة. فقط محتوى نقي للعقول المركزة.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-video shadow-2xl">
            <img src="https://picsum.photos/seed/work/800/600" alt="مكتبنا" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-black mb-12">فريقنا الأساسي</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'سارة تشين', role: 'رئيسة التحرير', img: 'https://picsum.photos/seed/sarah/200/200' },
            { name: 'ماركوس بيل', role: 'القائد التقني', img: 'https://picsum.photos/seed/marcus/200/200' },
            { name: 'عائشة مالك', role: 'مديرة التصميم', img: 'https://picsum.photos/seed/aisha/200/200' },
            { name: 'ديفيد كيم', role: 'أخصائي ذكاء اصطناعي', img: 'https://picsum.photos/seed/david/200/200' },
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="mb-4 rounded-3xl overflow-hidden aspect-square grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
