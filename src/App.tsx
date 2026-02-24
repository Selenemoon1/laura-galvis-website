import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop';
import Navigation from './sections/Navigation';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Navigation />
              <Home />
              <Footer />
              <WhatsAppButton />
            </div>
          }
        />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
        <Route path="/articulos" element={<Blog />} />
        <Route path="/articulos/:slug" element={<ArticleDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
