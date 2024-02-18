import React, { Component } from 'react'

export default class Product extends Component {
    addProductHandler(id){
        this.props.onAdd(id)
    }
    render() {
        let {title, img , price , id} = this.props
        return (
            <div class="shop-item">
                <span class="shop-item-title">{title}</span>
                <img class="shop-item-image" src={img} alt='pic'/>
                <div class="shop-item-details">
                    <span class="shop-item-price">$ {price}</span>
                    <button onClick={this.addProductHandler.bind(this , id)}
                        class="btn btn-primary shop-item-button"
                        type="button">
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
