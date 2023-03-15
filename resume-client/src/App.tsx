import './App.scss';
import CertsContainer from './app/features/certs/CertsContainer';
import Portfolio from './app/features/portfolio/Portfolio';
import WorkHistory from './app/features/work-history/WorkHistory';
import Entry from './app/layout/entry/Entry';
import Header from './app/layout/header/Header';
import LeftNav from './app/layout/left-nav/LeftNav';

function App() {
  var blerb = {
    header: "Header",
    subHeading: "subHeader",
    story: "story"
  }
  return (
    <div className="App">
      <Header/>
{/* 
      <LeftNav/> */}
      <Portfolio/>

      <main className="main-content">
        {/* <FloatTest/> */}
        {/* <WorkHistory/> */}
        {/* <CertsContainer/> */}
      </main>
    </div>
  );
}

export default App;
