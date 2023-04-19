import React from 'react';
import ReactDOM from 'react-dom/client';
   
const Title=(
    <>
   <h2>Title </h2>
   
   </>
);
const Mcontent=()=>(
    <>
         <h1>Hellow World!!</h1>
       
     </>
 );
    
const Main=()=>(
   <>
        <h1>Heading1</h1>
        {Title}
        <Mcontent/>
    </>
);

    
    const root=ReactDOM.createRoot(document.getElementById('root'));
  
    root.render(<Main/>);
