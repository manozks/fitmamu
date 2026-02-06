import React, { useState, useEffect, useCallback } from 'react';
import { Page } from './types.ts';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import QuizPage from './pages/QuizPage.tsx';
import SalesPage from './pages/SalesPage.tsx';
import ProductsPage from './pages/ProductsPage.tsx';

const App: React.FC = () => {
  // Simple path to page mapping defined with useCallback for stability
  const getPageFromPath = useCallback((path: string): Page => {
    try {
      const p = decodeURIComponent(path.substring(1));
      if (p === 'The Quiz') return Page.Quiz;
      if (p === 'Transformation') return Page.Sales;
      if (p === 'Products') return Page.Products;
      if (p === 'Home') return Page.Home;
      return Page.Home;
    } catch (e) {
      console.error("Routing error:", e);
      return Page.Home;
    }
  }, []);

  const [currentPage, setCurrentPage] = useState<Page>(() => getPageFromPath(window.location.pathname));

  // Sync state to URL and handle back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getPageFromPath]);

  const setPageAndSyncURL = (page: Page) => {
    setCurrentPage(page);
    let path = '/Home';
    if (page === Page.Quiz) path = '/The Quiz';
    if (page === Page.Sales) path = '/Transformation';
    if (page === Page.Products) path = '/Products';
    
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setCurrentPage={setPageAndSyncURL} />;
      case Page.Quiz:
        return <QuizPage setCurrentPage={setPageAndSyncURL} />;
      case Page.Sales:
        return <SalesPage />;
      case Page.Products:
        return <ProductsPage />;
      default:
        return <Home setCurrentPage={setPageAndSyncURL} />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setPageAndSyncURL}>
      <div key={currentPage} className="animate-page-enter">
        {renderPage()}
      </div>
    </Layout>
  );
};

export default App;
