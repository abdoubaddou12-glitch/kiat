
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Github, Twitter, Moon, Sun, ShoppingBag, ArrowLeft } from 'lucide-react';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import About from './pages/About';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-500/30 group-hover:rotate-12 transition-all">
              <ShoppingBag size={24} />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black tracking-tighter dark:text-white">عبدو ديلز</span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">أفضل العروض</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-red-600 transition-all">أحدث الصفقات</Link>
            <Link to="/about" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-red-600 transition-all">عن المنصة</Link>
            <button className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-all" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="bg-red-600 text-white px-7 py-3 rounded-2xl text-sm font-black hover:bg-red-700 shadow-xl shadow-red-500/20 active:scale-95 transition-all">
              أرسل لي العروض
            </button>
          </div>

          <button 
            className="lg:hidden p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-28">
        <div className="max-w-7xl mx-auto px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 py-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white"><ShoppingBag size={20} /></div>
                <span className="text-2xl font-black">عبدو ديلز.</span>
              </Link>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg leading-relaxed mb-10">
                شريكك الموثوق لتوفير المال. نحن نقوم بالعمل الشاق لنأتي لك بأفضل الخصومات من المتاجر العالمية.
              </p>
              <div className="flex gap-5">
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Twitter size={20} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8">المتاجر</h4>
              <ul className="space-y-4 font-bold opacity-60">
                <li><a href="#" className="hover:text-red-600 transition-colors">عروض تيمو (Temu)</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">عروض أمازون</a></li>
                <li><a href="#" className="hover:text-red-600 transition-colors">علي إكسبريس</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-8">روابط سريعة</h4>
              <ul className="space-y-4 font-bold opacity-60">
                <li><Link to="/about" className="hover:text-red-600 transition-colors">من نحن</Link></li>
                <li><Link to="/" className="hover:text-red-600 transition-colors">سياسة الخصوصية</Link></li>
                <li><Link to="/" className="hover:text-red-600 transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-800 text-center text-sm opacity-40 font-bold">
            © {new Date().getFullYear()} عبدو ديلز - منصة الأفلييت الأولى
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
