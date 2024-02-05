import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            submitted : false,
            firstNameData : '',
            lastNameData : '',
            emailData : '' ,
            allValid : false



        }
        this.submitHandler = this.submitHandler.bind(this)
        this.firstNameHandler = this.firstNameHandler.bind(this)
        this.lastNameHandler = this.lastNameHandler.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
    }

    submitHandler(event){
        event.preventDefault()
        this.setState((prevState)=>{
            return { submitted : !prevState.submitted}
        })
        if(this.state.firstNameData && this.state.lastNameData && this.state.emailData){
            this.setState({
                allValid : true  // az allValid tuye conditional rendering estefade mishe. (if avvali)
            })
        }
    }
    firstNameHandler(event){
        this.setState({
            firstNameData : event.nativeEvent.target.value
        })
    }
    lastNameHandler(event){
        this.setState({
            lastNameData : event.nativeEvent.target.value
        })
    }
    emailHandler(event){
        this.setState({
            emailData : event.nativeEvent.target.value
        })
    }

  render() {
    // if(this.state.firstNameData && this.state.lastNameData && this.state.emailData ){
    //     this.setState({
    //         allValid : true
    //     })
    //     return
    // }

    let showSuccess
    let showFirstNameError
    let showLastNameError
    // let showEmailError   // in ro if va elsesh ro pak mikonim va ba && minivisim
    if (this.state.allValid) {
        showSuccess = <div className="success-message">Success! Thank you for registering</div>
        setTimeout(() => {
            this.setState({
                allValid : false
            })
        }, 3000);
    }else{
        showSuccess = null
    }
    if (this.state.submitted && this.state.firstNameData){
        showFirstNameError = null
    } else if(this.state.submitted && !this.state.firstNameData) {
        showFirstNameError = <span id="first-name-error">Please enter a first name</span>
    }
    if (this.state.submitted && this.state.lastNameData){
        showFirstNameError = null
    } else if(this.state.submitted && !this.state.lastNameData){
        showLastNameError = <span id="last-name-error">Please enter a last name</span>
    }

    
    return (
      <div className="form-container">
            <form className="register-form" autoComplete="off" onSubmit={this.submitHandler}>
                    {/* Uncomment the next line to show the success message */}
                    {/* <div className="success-message">Success! Thank you for registering</div> */}
                    {showSuccess}
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstNameData} onChange={this.firstNameHandler}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="first-name-error">Please enter a first name</span> */}
                    {showFirstNameError}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastNameData} onChange={this.lastNameHandler}

                    />
                    {/* Uncomment the next line to show the error message */}
                    {/* <span id="last-name-error">Please enter a last name</span> */}
                    {showLastNameError}
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.emailData} onChange={this.emailHandler}

                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && !this.state.emailData&& (
                    <span id="email-error">Please enter an email address</span>                    
                    )}
                    
                    <button className="form-field" type="submit">
                        Register
                    </button>
            </form>
            
      </div>
    )
  }
}
