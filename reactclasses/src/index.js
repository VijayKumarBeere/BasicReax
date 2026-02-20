// import React from 'react';
import ReactDOM from 'react-dom/client';
// import TestMemo from './TestMemo';
// import TestAccess from './TestAccess';
// import Cycle from './Cycle';
// import Parent from './Parent';
// import { createContext } from 'react';

import Test from './RoutingTest';
// import Mapping from './Mapping';
// import TestRef from './TestRef';
// import MultiRef from './MultiTestRef';
// import CustomTest from './CustomHookTest';
// import TestEffect from './TestEffect';
// import ProductFetch from './ProductFetch';
// import Access from './AccessStaticFiles';
// import App from './App';
// import Header from './header';
// import Price from './Binding'
// import Product from './StateHook';
// import ColorChange from './Change'
// import Quantity from './quantity';
// import ProductDetails from './ProductManager';

// const heading = React.createElement('h1',{},"Hello World?!.");
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   heading
// );
// let menu = (<div>
//   <p>Para 1</p>
//   <p>Para 2</p>
// </div>)
// function Menu(){
//   return (<div>
//         <p>Para 1</p>
//         <p>Para 2</p>
//  </div>);
// }
// let isAdmin=true;
// class Menu extends React.Component{
//   render(){
//     // console.log(person);
//     // console.log(x);
//     return (
//       <App className='appButtons'>
//         <button onClick={() => this.displayMessage(10)}>Like</button>
//         <button>Share</button>
//         <button>Subscribe</button>
//       </App>
//       // App()
//       // <App/>
//     )
//   }
//   displayMessage(num) {
//     return alert('Button clicked : ' + num );
//   }
// }

// function Admin(){
//   return(
//     <h3>Admin Dashboard</h3>
//   )
// }

// let order={
//   id:25,
//   name:'Vijay',
//   price: 3500
// }
// export const context = createContext();
root.render(
  <>

    {/*<ProductFetch></ProductFetch>*/}
    {/* <TestEffect></TestEffect> */}
    {/* <Access></Access> */}
    {/* <Header></Header>
    {
      isAdmin && <Admin></Admin> //Alternate way of ternary operator.
    } */}
    {/* <Admin></Admin> */}
    
    {/* <Menu>
    </Menu> */}
    {/* <Counter></Counter> */}
    {/* <Price></Price> */}
    {/* <Product></Product> */}
    {/* <ColorChange></ColorChange> */}
    {/* <Quantity></Quantity> */}
    {/* <ProductDetails></ProductDetails> */}

      <Test></Test>
      {/* <Mapping></Mapping> */}
      {/* <TestRef></TestRef> */}
      {/* <MultiRef></MultiRef> */}
      {/* <CustomTest></CustomTest> */}
      {/* <context.Provider value={order}>
        <Parent></Parent>
      </context.Provider> */}
      {/* <TestMemo></TestMemo> */}
      {/* <TestAccess></TestAccess> */}
      {/* <Cycle></Cycle> */}
  </>
);