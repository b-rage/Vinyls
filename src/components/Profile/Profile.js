import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'
import './profile.css'

class Profile extends Component {

    state = { username: '', imgProfileUrl: null, bio: '' }

    componentDidMount() {
        try {       
            
            logic.getCurrentUser()
            .then(user => { this.setState({ username: user.username, imgProfileUrl: user.imgProfileUrl, bio: user.bio  }) })
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }


    handleEditClick = () => this.props.history.push('/edit-profile') 


    render() {

        return<div className='profile-container'>

            <img className='profile-img' src={this.state.imgProfileUrl ? this.state.imgProfileUrl : './img/icon-profile.png'} ></img>
            <br></br>

                <p className='profile-info'>username: {this.state.username}</p>
                <p className='profile-info'>biography: {this.state.bio}</p>
                <section><button className='btn-logout' onClick={this.handleEditClick}>Edit</button></section>
            
            
        </div>

            
            
        
    }
}

export default withRouter(Profile)