import React from 'react'
import './Box.css'

export default function Box(props) {
//   if(props.price>1000){
//   return (
    
//         <div id='box-container'>
//             <h2 className='text'>{props.text}</h2>
//             <img src={props.src} alt='pic' id='pict'/>
//             <p className='price'>{props.price} $</p>
//             <p className='explain'>{props.explain}</p>
//             <button className='box-btn'>Add to cart</button>
//         </div>
//   )
// }else{
//   return null
// }


//or


return (
    props.price >200 && props.count &&
    
        <div id='box-container'>
            <h2 className='text'>{props.text}</h2>
            <img src={props.src} alt='pic' id='pict'/>
            <p className='price'>{props.price} $</p>
            <p className='explain'>{props.explain}</p>
            <button className='box-btn'>Add to cart</button>
        </div>
    
  )


}