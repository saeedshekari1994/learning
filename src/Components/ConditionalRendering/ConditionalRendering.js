import React, { Component } from 'react'
import './ConditionalRendering'

export default class ConditionalRendering extends Component {
    constructor(props){
        super(props)
        this.state = {
            age : 16
        }
    }
  render() {
                //////////////////////////////  estefade az if  va else///////////////////////////////////////

        // if(this.state.age > 18){
        //     return (
        //         <div>
        //         شما با موفقیت وارد شدید.
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //         شما مجاز به ورود نیستید.
        //         </div>
        //     )
        
        // }

        //////////////////////////////////////////////// estefade az if va else be hamrahe moteqayyer//////////

        // let isLoggIn
        // if(this.state.age > 18){
        //     isLoggIn = <h2>شما مجاز به ورود هستید</h2>
        // }else{
        //     isLoggIn = <h2>شما مجاز به ورود نیستید</h2>
        // }
        // return(
        //     <div>
        //         {isLoggIn}
        //     </div>
        // )

        ////////////////////////////// estefade az && ya || baraye check kardane shart//////////////////////////////////
        // return(
        //     <div>
        //         {this.state.age > 18 &&   // agar ba || benevisim tage h1 namayesh dade nemishe .
        //         <h1>شما مجاز به ورود به سایت هستید</h1> 
        //         }
        //     </div>
        // )


        ////////////////////////////////// estefade az ternary conditions/////////////////////////

        return(
            <div>
                <h2>
                    you are {(this.state.age > 18) ? 'currently' : 'not allowed to'} log in.
                </h2>
            </div>
        )
        
    }
}
