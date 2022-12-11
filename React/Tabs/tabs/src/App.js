import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import TabGenerator from './components/TabGenerator';
import TabDisplay from './components/TabDisplay';

function App() {
  const[tab, setTab]= useState('')

const goTab =(tab) =>{
  setTab(tab);
}
  return (
    <div className="App">
      <TabGenerator onTab={goTab} />
      <TabDisplay tabs={tab}/>
    </div>
  );
}

export default App;
