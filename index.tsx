
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

const startApp = () => {
  try {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      console.error("لم يتم العثور على عنصر root");
      return;
    }

    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("فشل تحميل تطبيق عبدو ويب:", error);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `<div style="padding: 20px; text-align: center; color: red;">عذراً، حدث خطأ أثناء تحميل الموقع. يرجى تحديث الصفحة.</div>`;
    }
  }
};

startApp();
