import './App.scss';
import Resume from './app/features/resume/Resume';
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
            <div className="container">
                <header className="header">
                    <Header/>
                    <div className="content">
                        <nav className="sidebar">
                            <LeftNav/>
                        </nav>
                        <main className="primary-view">
                            <Resume/>
                        </main>
                    </div>
                </header>
            </div>
    </div>
  );
}

export default App;
