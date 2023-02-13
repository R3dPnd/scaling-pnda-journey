import './App.scss';
import CertsContainer from './app/features/certs/CertsContainer';
import WorkHistory from './app/features/work-history/WorkHistory';
import Header from './app/layout/header/Header';
import LeftNav from './app/layout/left-nav/LeftNav';

function App() {
  return (
    <div className="App">
      <Header/>

      {/* <LeftNav/> */}

      <main className="main-content">
        {/* <FloatTest/> */}
        {/* <WorkHistory/> */}
        <CertsContainer/>
      </main>
    </div>
  );
}

export default App;
