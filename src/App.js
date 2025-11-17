import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/PassChar';

function App() {
  let [uppercase,setUppercase] = useState(false);
  let [lowercase,setLowercase] = useState(false);
  let [Numbercase,setNumbercase] = useState(false);
  let [symbols,setSymbols] = useState(false);
  let [passwordlen, setPasswordLen] = useState(20)
  let [fpass,setpass] =useState('')

  let createPassowrd=()=>{
    let finalPass=''
    let charSet=''
       if(uppercase || lowercase || Numbercase || symbols){
               if(uppercase) charSet+=UC;
               if(lowercase) charSet+=LC;
               if(Numbercase)  charSet+=NC;
               if(symbols) charSet+=SC;
               for(let i =0;i<passwordlen;i++){
                  finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
               }
               setpass(finalPass)
       }else{
        alert("please select one checkbox....")
       }
       }

    let copyPass=()=>{
      navigator.clipboard.writeText(fpass)
    }
  return (
    <div className='root'>
    <div className='Random'> Random Passord Generator</div>
      <div className ='passwordBox'>
        <h1>Password Generator</h1>
         
         <div className='passwordBoxin'>
          <input type ="text" readonly value={fpass} /><button onClick={copyPass}>Copy</button>
         </div>
         <div className='passwordLength'>
          <label> Password Length</label>
          <input type='number' max={20} min={0} value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>
         </div>

         <div className='uppercase'>
         <label> Include Uppercase Letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
          </div>
          <div className='lowercase'>
         <label> Include Lowercase Letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
          </div>   
          <div className='Numbers'>
         <label> Include Numbers</label>
          <input type='checkbox' checked={Numbercase} onChange={()=>setNumbercase(!Numbercase)}/>
          </div> 
          <div className='symbols'> 
         <label> Include Symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
          </div> 

          <button className='btn' onClick={createPassowrd}>Generate Password</button>
      </div>
      </div>
  );
}

export default App;

