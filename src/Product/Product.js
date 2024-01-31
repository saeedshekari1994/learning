import './Product.css'
function Product(){
    return(
        <div className='container'>
            <h2>product details</h2>
            <img src='img3.jpg' className='pic'/>
            <h1>brand new USB</h1>
            <p className='price'>300$</p>
            <p>This is the 
                best digital product manufactured by 
                Tesla in 2020</p>
                <button className='btn'>add to cart</button>
        </div>
    )
}
export default Product