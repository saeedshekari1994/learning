import React from 'react'
import Clients from './Users/Users';
import './App.css'
import Product from './Product/Product';
import Box from './Box/Box';
function App() {
  return (
    <div>
        <div id='container'>
          <Product/>
          <Product/>
          <Product/>
          <Clients/>
        </div>
          <hr/>
        <h1 className='section2'>using props for products</h1>
        <div className='box-container'>
            <Box text="USB" src='img3.jpg' price={2000} explain= "best and cheapest product"/>
            <Box text="AUX" src='./images/img2.jpg' price={100} explain= "for car audio sys"/>
            <Box text="Charger" src='./images/img1.jpg' price={300} explain= "for mobile"/>
        </div>
    </div>
  )
}

export default App;
