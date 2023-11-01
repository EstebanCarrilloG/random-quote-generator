
import { useEffect, useState } from 'react';
import './App.css';
import Wrapper from './components/wrapper';
import { database } from './database/database';
import { getRandomInt } from './scripts/rndNumber';

function App() {
  const [color, setColor] = useState();
  const { colors} = database;


  const handleColorChange = () =>{
    setColor(colors[getRandomInt(colors.length)])
  }
  useEffect(() =>{
    handleColorChange();
  },[])


  return (
    <div className="App" style={{"background": color}} >
    <Wrapper color ={color} handleColorChange = {handleColorChange} />
      
    </div>
  );
}

export default App;
