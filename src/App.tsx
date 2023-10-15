import './index.css'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <Body />
      <Footer />
    </DarkModeProvider>
  )
}

export default App
