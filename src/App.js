import React, {useState} from 'react';


const App=()=>{
  let time =new Date().toLocaleTimeString();
  let seconds = new Date().getSeconds();


  const[ctime,setCtime]=useState(time);

  const UpdateTime = () =>{
    time=new Date().toLocaleTimeString();
    
    setCtime(time);
  };
  
  setInterval(UpdateTime,1000)
return(
  <>
   <div style={{background:seconds%2===0?"black":"white"}}>
  <h1 id="clock">{ctime}</h1>
  </div>
  </>
);
};

export default App;