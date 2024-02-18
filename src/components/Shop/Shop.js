import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png' },
                { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png' },
                { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png' },
                { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png' },
                { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
            ],
        }
        this.addToCartHandler = this.addToCartHandler.bind(this)
        this.removeFromCartHandler = this.removeFromCartHandler.bind(this)
        this.removeCartHandler = this.removeCartHandler.bind(this)
    }

    addToCartHandler(productId){
        // console.log(productId)
        let targetProductToAdd = this.state.products.find(product => {
            return product.id === productId
        })
        // console.log(targetProductToAdd)
        let isExisting = this.state.shoppingCart.some(item=>{
            return item.id === targetProductToAdd.id
        })
        if(!isExisting){
            this.setState({
                shoppingCart : [...this.state.shoppingCart , targetProductToAdd]
            })
    
        }
    }

    removeFromCartHandler(productId){
        // console.log(productId)
        // hazfe item ba estefade az filter be jaye findIndex va splice => item hayi ro filter mikonim ke id shun barabar nist ba mahsule morede nazar(mahsule morede nazar ro az shoppingCart hazf mikonim )
        let filteredArray = this.state.shoppingCart.filter(product => {
            return product.id !== productId
        })
        console.log(filteredArray)
        this.setState({
            shoppingCart : filteredArray
        })
    }
    removeCartHandler(){
        this.setState({
            shoppingCart : []
        })
    }


    render() {
        return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="https://github.com/">HOME</a></li>
                            <li><a href="https://www.google.com/">STORE</a></li>
                            <li><a href="https://sabzlearn.ir/">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">
                        {this.state.products.map(product => (
                            <Product key={product.id} {...product} onAdd = {this.addToCartHandler}/>
                        ))}

                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">
                            {this.state.shoppingCart.map(cartObject => (
                                <CartProduct key={cartObject.id} {...cartObject} onRemove = {this.removeFromCartHandler}/>
                            )
                                )}


                    </div>
                    <button class="btn btn-primary btn-purchase" type="button" onClick={this.removeCartHandler}>
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                                {this.state.socials.map(social => (
                                    <Social key={social.id} {...social} />
                                ))}
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}