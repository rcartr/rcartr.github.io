import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00695c',
      light: '#439889',
      dark: '#003d33',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#80ccc4',
      light: '#b2fff7',
      dark: '#4f9b94',
      contrastText: '#000000'
    }
  }
});

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Body />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
