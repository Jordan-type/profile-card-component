import React from 'react'
import ProfileCard from './components/ProfileCard'
import './App.css';

function App() {
  return (
    // bem naming convention
    <div classNmae='app'>
      <div className='app_bg_pattern_top'></div>
      <div className='app_bg_pattern_bottom'></div>
      <ProfileCard
            name='Jordan type'
            age='26'
            city='Nairobi'
            followers='80K'
            likes='803K'
            photos='1.4K'></ProfileCard>
    </div>
  );
}

export default App;
