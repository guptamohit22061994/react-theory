import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

const AppLayout=()=>{
    return(
<>
    <Header/>
    <Body/>
    <Footer/>
</>
    );
};

    const container =React.createElement("div",{id:"container",},  <AppLayout/>);
    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(container);
