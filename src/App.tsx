import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Body />
        <Footer />
      </div>
    </DarkModeProvider>
  )
}

export default App
