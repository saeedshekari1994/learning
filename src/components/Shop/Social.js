import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        let {href , img} = this.props
        console.log(this.props, 'props');
        return (
            <li>
                <a href={href} target="_self">
                    <img src={img} alt='pic'/>
                </a>
            </li>
        )
    }
}
