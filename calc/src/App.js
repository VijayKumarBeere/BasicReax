// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Keypad from './Keypad';

function App() {
  let [input, updateInput]= useState('');

  function AllowInput(value){
    updateInput(input + value);
  }

  function AllowBack(){
    let text = input.trim();
    console.log(text);
    if(text !==''){
      updateInput(text.substring(0,text.length-1));
    }
  }

  function ClearInput(){
    updateInput('');
  }
  function Evaluate(){
    let text = input;
    if(text.charAt(text.length-1)==='+' || text.charAt(text.length-1)==='-' 
        || text.charAt(text.length-1)==='*' || text.charAt(text.length-1)==='/')
    {
      
    }
    else
      updateInput(eval(input)+'');
  }
  return (
    <div className="App">
      <h4 className='text-primary' style={{fontFamily:'serif', fontWeight:'bolder'}}>CALCULATOR</h4>
      <div className='calc'>
        <input type="text" id='inputText' value={input}/>
        <Keypad allow={AllowInput} clear={ClearInput} equals={Evaluate} back={AllowBack}></Keypad>
      </div>
    </div>
  );

}

export default App;
