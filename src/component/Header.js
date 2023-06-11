import React from 'react';

const Title=(
    <>
   <p className="my-0"><i> <strong> Eat&fit </strong></i></p>
    </>
);
const Mcontent=()=>(
    <>
         <h1 className="logo mb-0 my-0">LOGO</h1>
         </>
 );
    
const Header=()=>{
 return(
<>
<header className="py-2 d-flex justify-content-between">
     <div className="px-3">
 <Mcontent/>
        {Title}
        </div>

        <div className="d-flex align-item-center"> 
            <ul className="nav d-flex px-3">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
            </ul>
        </div>
        </header>
</>
 );
};

export default Header;