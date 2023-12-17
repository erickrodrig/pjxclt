import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react'

const colors = {
  "gray": {
    "50": "#F2F2F2",
    "100": "#DCDBDB",
    "200": "#C5C4C4",
    "300": "#AEADAD",
    "400": "#979696",
    "500": "#817E7E",
    "600": "#676565",
    "700": "#4D4C4C",
    "800": "#333333",
    "900": "#1A1919"
  }
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ colors, config })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
