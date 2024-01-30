import React from 'react'
import Clients from './Users/Users';
import './App.css'
import Product from './Product/Product';
function App() {
  return (
    <div id='container'>
      <Product/>
      <Product/>
      <Product/>
      <Clients/>
    </div>
  )
}

export default App;
