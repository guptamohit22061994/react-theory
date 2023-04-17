//  <script>

//   var element=document.createElement('h2');
//   element.innerText="India is such a big developing Country";
//   document.getElementById('root').appendChild(element);
//    </script> 

    const heading1=React.createElement('h1',{
        key:1,
        className:"heading1",
     
       },'heading1');

       const heading2=React.createElement('h2',{
        key:2,
        className:"heading2",
     
       },'heading2');

       const container=React.createElement('div',{
     
        className:"container",
     
       },[heading1,heading2]);
    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(container);