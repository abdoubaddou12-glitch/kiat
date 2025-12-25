
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Github, Twitter, Moon, Sun, Bell, Command } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:rotate-6 transition-transform">
                <Command size={22} />
              </div>
              <span className="tracking-tight dark:text-white">عبدو ويب</span>
            </Link>
            
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">الرئيسية</Link>
              <Link to="/about" className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity">عن الكاتب</Link>
              <button className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
                <Search size={16} /> استكشف
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:scale-105 transition-all"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button className="hidden sm:flex bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95">
              اشترك في النشرة
            </button>

            <button 
              className="lg:hidden p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 p-6 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-lg font-bold p-2">الرئيسية</Link>
              <Link to="/about" className="text-lg font-bold p-2">عن الكاتب</Link>
              <button className="bg-indigo-600 text-white p-4 rounded-2xl font-bold">اشترك الآن</button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6">عبدو ويب.</h3>
              <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
                وجهتكم الأولى لفهم المستقبل الرقمي. مقالات تقنية معمقة، دروس برمجية، ورؤى حول الذكاء الاصطناعي بلغة عربية رصينة.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Github size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"><Twitter size={18} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">المواضيع</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><Link to="/">الذكاء الاصطناعي</Link></li>
                <li><Link to="/">تطوير الويب</Link></li>
                <li><Link to="/">تجربة المستخدم</Link></li>
                <li><Link to="/">الأمن السيبراني</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">روابط</h4>
              <ul className="space-y-4 text-sm opacity-70">
                <li><Link to="/about">عن المدونة</Link></li>
                <li><Link to="/">تواصل معنا</Link></li>
                <li><Link to="/">سياسة الخصوصية</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 text-center opacity-50 text-xs">
            © {new Date().getFullYear()} عبدو ويب - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
