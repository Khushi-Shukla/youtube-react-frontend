import './App.css';
import Header from './components/Header/Header';
import RecomendedVideos from './components/ReccomendedVideos/RecomendedVideos';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-page">
        <Sidebar />
        <RecomendedVideos />
      </div>
    </div>
  );
}

export default App;
