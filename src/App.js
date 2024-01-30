import React from 'react'
import Users from './Users/Users';
import './App.css'
import Product from './Product/Product';
function App() {
  return (
    <div id='container'>
      <Product/>
      <Product/>
      <Product/>
      <Users/>
    </div>
  )
}

export default App;
