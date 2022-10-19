import './App.css';
import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import Header from './app/layout/Header';
import ResumePage from './features/Resume/ResumePage';
import { Redirect, Route, withRouter } from 'react-router-dom';
import CertificationsPage from './features/Certifications/CertificationsPage';
import AboutPage from './features/About/AboutPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header />
          <Container className="container">
            <Route exact path='/Resume' component={withRouter(ResumePage)}/>
            <Route exact path='/Certifications' component={withRouter(CertificationsPage)}/>
            <Route exact path='/About' component={withRouter(AboutPage)}/>
            <Redirect from='/' to="/Resume" />
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
