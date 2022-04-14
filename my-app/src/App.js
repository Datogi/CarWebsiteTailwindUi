import React, {useState} from 'react'
import './App.css';
import Card from './components/Card with header';
import Button from './components/Circular buttons';

import Example from './components/Simple with icons and brand color';



function App() {

 return(
    <div className='flex '>
     <div>
     <Example/>
     </div>
  <div className='w-full h-full bg-gray-200 photo'>
     <div className='w-full flex justify-between'><h1 >Target Approved</h1><div ><Button/></div> </div>
     
     <Card/>
    </div>
     </div>
 )
}

export default App;
