import React from 'react'
import './App.css'
import Modal from './Modal/Modal';
import ModalClassComp from './ModalClassComponent/ModalClassComp';
import Box from './Box/Box';
import Users from './Users/Users';
let allProducts = [
  {text: "AUX", price: 100, explain: "for car audio sys", count: 6},
  {text: "USB", src: 'img3.jpg', price: 2000, explain: "best and cheapest product", count: 12},
  { price: 300, explain: "for mobile", count: 0}
]

function App() {
  return (
    <div>
        <Users/>
          <hr/>
        <h1 className='section2'>using props for products</h1>
        <div className='box-container'>
            {
            /* <Box text="AUX" src='./images/img2.jpg' price={100} explain= "for car audio sys" count={6}/>
            <Box text="USB" src='img3.jpg' price={2000} explain= "best and cheapest product" count={12}/>
            <Box text="Charger" src='./images/img1.jpg' price={300} explain= "for mobile" count={0}/>
          */}
 {/* or */}

            <Box {...allProducts[0]}>
            <h2>a h2 child for box 1</h2>
            </Box>
            <Box {...allProducts[1]}>

            </Box>
            <Box {...allProducts[2]}>
            <button>a button child</button>
            </Box>
          </div>
          
          <Modal>
            <p className='question'>are you sure you want to exit?</p>
            <hr/>
            <div className='details'>
                <p className='option'><a href='#'>yes</a></p>
                <p className='option'><a href='#'>no</a></p>
            </div>
            <button className='btn'>close</button>
          </Modal>

          <Modal>
            <p className='question'>are you sure you want to join?</p>
            <hr/>
            <div className='details'>
                <p className='option'><a href='#'>now</a></p>
                <p className='option'><a href='#'>not now</a></p>
            </div>
            <button className='btn'>click to pay</button>
          </Modal>
          <br/><br/>
          <hr/><hr/>
          <ModalClassComp text="using props in a class comp">
              <p className='question'>this is a class comp do you like it?</p>
                <hr/>
                <div className='details'>
                    <p className='option'><a href='#'>I hate it</a></p>
                    <p className='option'><a href='#'>functional comp is better</a></p>
                </div>
          </ModalClassComp>

    </div>
  )
}

export default App;
