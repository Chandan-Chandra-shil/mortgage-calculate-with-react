import React from 'react';
import Navbar from './components/Navbar';
import SliderSelect from './components/SliderSelect';
import TenYearSelect from './components/TenYearSelect';
import Result from './components/Result';

const App = () => {
  return (
    <div>
      <Navbar />
      <SliderSelect />
      <TenYearSelect />
      <Result/>
    </div>
  );
};

export default App;