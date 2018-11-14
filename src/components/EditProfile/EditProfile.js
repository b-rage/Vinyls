import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'


class EditProfile extends Component {
    state = { username: '', newPassword: '', password: '', imgProfileUrl: null, bio: '' }


    componentDidMount() {
        try {
            logic.getCurrentUser()
            .then(user => { this.setState({ username: user.username, imgProfileUrl: user.imgProfileUrl, bio: user.bio  }) })
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleNewPasswordChange = event => {
        const newPassword = event.target.value

        this.setState({ newPassword })
    }

    handleBioChange = event => {
        const bio = event.target.value

        this.setState({ bio })
    }

    uploadWidget =() => {

        let widget = window.cloudinary.openUploadWidget({ cloud_name: 'dmp64syaz', upload_preset: 'ti3e8knr'},
            (error, result) => {
               

                if (result.event === 'success') {

                    const imgProfileUrl = result.info.secure_url

                    this.setState({ imgProfileUrl })
                    
                    widget.close()


                }
            })
            
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log('confirmar');
        

        const { username, newPassword, password, imgProfileUrl, bio } = this.state

        this.props.onEditProfile(username, newPassword, password, imgProfileUrl, bio)
     
    }

    render() {
        return <form className='form-register' onSubmit={this.handleSubmit}>

            <img className='profile-img' src={this.state.imgProfileUrl ? this.state.imgProfileUrl : './img/vinyl-512.png'} ></img>
            <button type='button' onClick={this.uploadWidget} className="btn-logout">Add Image</button>
            <br></br>
            <input className='input' type="text" defaultValue={this.state.username} onChange={this.handleUsernameChange} />
            <br></br>
            <input className='input' type="password" placeholder="password" onChange={this.handlePasswordChange} />
            <br></br>
            <input className='input' type="password" placeholder="new password" onChange={this.handleNewPasswordChange} />
            <br></br>
            <textarea className='text-area' type="text" value={this.state.bio} onChange={this.handleBioChange}></textarea>
            <br></br>
            <button type="submit" className='btn-login2'>Confirm</button> 
            <br></br>
            <a href="#" className='back' onClick={this.props.onGoBack}>back</a>
        </form>
    }
}

export default withRouter(EditProfile)