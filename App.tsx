
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Github, Twitter, Linkedin, Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import About from './pages/About';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`} dir="rtl">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-black tracking-tighter text-indigo-600 dark:text-indigo-400">
                عبدو ويب<span className="text-slate-400">.</span>
              </Link>
              
              <div className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-sm font-medium hover:text-indigo-500 transition-colors">الرئيسية</Link>
                <Link to="/about" className="text-sm font-medium hover:text-indigo-500 transition-colors">عن المدونة</Link>
                <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
                <button className="text-sm font-medium hover:text-indigo-500 transition-colors flex items-center gap-2">
                  <Search size={16} /> بحث
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <div className="hidden md:flex items-center gap-3 mr-4">
                <a href="#" className="p-2 text-slate-400 hover:text-indigo-500 transition-colors"><Github size={18} /></a>
                <a href="#" className="p-2 text-slate-400 hover:text-indigo-500 transition-colors"><Twitter size={18} /></a>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200 dark:shadow-none">
                  اشترك الآن
                </button>
              </div>

              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link to="/" className="block text-lg font-medium p-2 text-right">الرئيسية</Link>
              <Link to="/about" className="block text-lg font-medium p-2 text-right">عن المدونة</Link>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-center gap-6">
                <Github size={24} className="text-slate-400" />
                <Twitter size={24} className="text-slate-400" />
                <Linkedin size={24} className="text-slate-400" />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 mt-20 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-black text-indigo-600 mb-4">عبدو ويب.</h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6 leading-relaxed">
                جرعتك اليومية من الرؤى المهنية، اتجاهات التكنولوجيا، وأخبار الذكاء الاصطناعي. تُقدم من قبل خبراء للمفكرين العصريين.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg hover:text-indigo-600 transition-colors"><Github size={20} /></a>
                <a href="#" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg hover:text-indigo-600 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg hover:text-indigo-600 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
                <li><Link to="/" className="hover:text-indigo-600 transition-colors">الرئيسية</Link></li>
                <li><Link to="/about" className="hover:text-indigo-600 transition-colors">عن المدونة</Link></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">اتصل بنا</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">سياسة الخصوصية</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">التصنيفات</h3>
              <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">التكنولوجيا</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">الذكاء الاصطناعي</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">التصميم</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">الأعمال</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} عبدو ويب. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
