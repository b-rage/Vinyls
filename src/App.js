import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom'
import logic from './logic'
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Error from './components/Error/Error'

// redux import provider

import { Provider } from 'react-redux'
import store from './store'


class App extends Component {
  state = { error: null }

   /*  handleRegisterClick = () => this.props.history.push('/register')

    handleLoginClick = () => this.props.history.push('/login')  */

   
    handleRegister = ( email, username, password, bio ) => {
  
        try {
            logic.registerUser(email, username, password, bio)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/index'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }
    
    handleLogin = (username, password) => {
        try {
            logic.login(username, password)
                .then(() =>  {
                this.setState({ error: null }, () => this.props.history.push('/index'))
            })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    
    }
    
    handleLogoutClick = () => {
        logic.logout()
        this.props.history.push('/')
    }
    

    render() { 

        const { error } = this.state

        return ( <Provider store={ store }>
                    <div>
                        {logic.loggedIn && <Navbar onLogout={this.handleLogoutClick}></Navbar>}

                       <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick}/> : <Redirect to="/index" />} /> 
                       <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister}  /> : <Redirect to="/index" />} /> 
                        {error && <Error message={error} />}
                        <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin}  /> : <Redirect to="/index" />} /> 
                        <Route path="/index" render={() => logic.loggedIn ? <Index onLogin={this.handleLogin}  /> : <Redirect to="/index" />}/>                      
                    </div> 
            </Provider>
        )   
    }
}

export default withRouter (App);
