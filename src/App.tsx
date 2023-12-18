import './App.css'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ComparisonTable } from './components/ComparisonTable';
import { useEffect } from 'react';

export default function App() {
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
