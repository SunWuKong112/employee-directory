import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavTabs from './components/NavTabs';
import Search from "./components/Search";


function App(){
  document.title = "Wikipedia Searcher";
  return (
      <div>
        <NavTabs />
          {/* <Route exact path="/" component={Search} /> */}
          <Search />
      </div>
  );
}

export default App;