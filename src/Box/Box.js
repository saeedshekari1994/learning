import React from 'react'
import './Box.css'

// export default function Box(props) {  
//   return (
//           <div id='box-container'>
//               <h2 className='text'>{props.text}</h2>
//               <img src={props.src} alt='pic' id='pict'/>
//               <p className='price'>{props.price} $</p>
//               <p className='explain'>{props.explain}</p>
//               <button className='box-btn'>Add to cart</button>
//           </div>
      
//     )
//   }
//   Box.defaultProps = {
//     src: 'logo192.png',
//     text: "default text"
//   }

// alan inja tasvire aval va sevvom ba text boxe sevvom default hastan.

                                            // orrr

export default function Box({text= 'default text', src = 'logo192.png' , price , explain, children}) {  
return (
    <div id='box-container'>
        <h2 className='text'>{text}</h2>
        <img src={src} alt='pic' id='pict'/>
        <p className='price'>{price} $</p>
        <p className='explain'>{explain}</p>
        <button className='box-btn'>Add to cart</button>
        {children}
    </div>

)
}
                                                                                
