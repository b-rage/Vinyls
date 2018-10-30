import React, {Component} from 'react'
import { Button, Input } from 'mdbreact'
import  './register.css'

class Register extends Component {
    state = { email: '', username: '', password: '', bio:'' }

    handleEmailChange = event => {
        const email = event.target.value

        this.setState({ email })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleBioChange = event => {
        const bio = event.target.value

        this.setState({ bio })
    }


    handleSubmit = event => {
        event.preventDefault()

        const {  email, username, password, bio } = this.state

        this.props.onRegister( email, username, password, bio)
    }

    render() {
        return <div className="register-container">

        <form onSubmit={this.handleSubmit}>


            <Input type="text" label="Email *" onChange={this.handleEmailChange} />

            <Input type="text" label="Username *" onChange={this.handleUsernameChange} />

            <Input type="password" label="Password *" onChange={this.handlePasswordChange} />

            <Input type="text" label="Bio" onChange={this.handleBioChange} />

            <p>*required</p>

            <div className="button-container">
            
            <Button color="unique" type="submit">Register</Button> 
            </div>
        </form>
        </div>
    }
}

export default Register
