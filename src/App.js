import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom'
import logic from './logic'
import Index from './components/Index/Index'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import Landing from './components/Landing/Landing'
import Error from './components/Error/Error'
import Profile from './components/Profile/Profile'
import EditProfile from './components/EditProfile/EditProfile'

// redux import provider

import { Provider } from 'react-redux'
import store from './store'


class App extends Component {
  state = { error: null }

   /*  handleRegisterClick = () => this.props.history.push('/register')

    handleLoginClick = () => this.props.history.push('/login')  */

    handleEditProfile = ( username,  newPassword, password, imgProfileUrl, bio ) => {
        
        try {
            logic.modifyUser( username,  newPassword, password, imgProfileUrl, bio )
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/profile'))
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }
   
    handleRegister = ( email, username, password, bio ) => {
  
        try {
            logic.registerUser(email, username, password, bio)
                .then(() => {
                    this.setState({ error: null }, () => this.props.history.push('/login'))
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

    handleGoBack = () =>  {
        this.setState({error: null})
        this.props.history.push('/')
    }
    
    

    render() { 

        const { error } = this.state

        return ( <Provider store={ store }>
                    <div>
                        {logic.loggedIn && <NavbarComponent onLogout={this.handleLogoutClick}></NavbarComponent>}

                       <Route exact path="/" render={() => !logic.loggedIn ? <Landing onRegisterClick={this.handleRegisterClick} onLoginClick={this.handleLoginClick}/> : <Redirect to="/index" />} /> 
                       <Route path="/register" render={() => !logic.loggedIn ? <Register onRegister={this.handleRegister} onGoBack={this.handleGoBack}  /> : <Redirect to="/index" />} /> 
                        <Route path="/login" render={() => !logic.loggedIn ? <Login onLogin={this.handleLogin} onGoBack={this.handleGoBack}  /> : <Redirect to="/index" />} /> 
                        {error && <Error message={error} />}
                        <Route path="/index" render={() => logic.loggedIn ? <Index onLogin={this.handleLogin}  /> : <Redirect to="/index" />}/>   
                        <Route path="/profile" render={() => logic.loggedIn ? <Profile /> : <Redirect to="/login" />} />
                        <Route path="/edit" render={() => logic.loggedIn ? <EditProfile onEditProfile={this.handleEditProfile} /> : <Redirect to="/login" />} />
                   
                    </div> 
            </Provider>
        )   
    }
}

export default withRouter (App);
