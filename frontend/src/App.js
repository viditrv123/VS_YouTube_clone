import './styles/App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Recommendation from './components/Recommendation';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app__page'>
        <SideBar/>
        <Recommendation/>
      </div>
    </div>
  );
}

export default App;
