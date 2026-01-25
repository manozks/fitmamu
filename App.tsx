
import React, { useState, useEffect } from 'react';
import { Page } from './types.ts';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import QuizPage from './pages/QuizPage.tsx';
import SalesPage from './pages/SalesPage.tsx';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setCurrentPage={setCurrentPage} />;
      case Page.Quiz:
        return <QuizPage setCurrentPage={setCurrentPage} />;
      case Page.Sales:
        return <SalesPage />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {/* 
        By providing a unique 'key' based on the currentPage, React will 
        fully re-mount the wrapper element, triggering the CSS animation 
        defined in index.html every time the user navigates.
      */}
      <div key={currentPage} className="animate-page-enter">
        {renderPage()}
      </div>
    </Layout>
  );
};

export default App;
