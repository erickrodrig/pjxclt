import './App.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComparisonTable } from './components/ComparisonTable';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", localStorage.getItem("theme") || 'dark');
  }, []);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <ComparisonTable />
        <Footer />
      </div>
    </>
  )
}
