import React from "react";
import './App.css';
import Header from './components/header/Header';
import RecomendedVideos from './components/RecomendedVideos/RecomendedVideos';
import Sidebar from './components/Sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
        <Route path="/search/:searchTerm">
            <div className="app-page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app-page">
              <Sidebar />
              <RecomendedVideos />
            </div>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
