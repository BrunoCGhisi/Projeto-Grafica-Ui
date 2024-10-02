import { ThemeProvider } from '@mui/material'
import Router from './router/Router'
import { LightTheme, DarkTheme } from './shared/themes'
import { AppThemeProvider } from './shared/contexts'



function App() {
  return ( 
    <AppThemeProvider> 
      <Router/>
    </AppThemeProvider>
    
)
}

export default App
