import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'

// Redux
// import { connect } from 'react-redux'
// import { getCurrentUser } from '../../actions/usersActions'


class NavbarComponent extends Component {

    state = {collapse: false, isWideEnough: false, username: '', imgProfileUrl: null, bio: ''}


    componentDidMount() {
        try {       
            
            logic.getCurrentUser()
            .then(user => { this.setState({ username: user.username, imgProfileUrl: user.imgProfileUrl, bio: user.bio  }) })
            .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }


   onClickNav = () => this.setState({ collapse: !this.state.collapse })

   goToProfile = () => this.props.history.push('/profile') 

   goToIndex = () => this.props.history.push('/index') 
    
   render() {
       const { username } = this.state
       
    
       return (
           <Navbar color="black darken-4" dark expand="md"  scrolling>

               <NavbarBrand href="/index">

                   <a onClick = { this.goToIndex } ><strong>Vinyls</strong></a>

               </NavbarBrand>

               { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClickNav } />}

               <Collapse isOpen = { this.state.collapse } navbar>

                   <NavbarNav right>

                       <NavItem >

                           <a className="nav-link waves-effect waves-light" onClick = { this.goToProfile } ><i className="fa fa-star"></i>{username}</a>

                       </NavItem >

                       <NavItem>

                           <a className="nav-link waves-effect waves-light" onClick = { this.props.onLogout }><i className="fa fa-sign-out"></i> Logout</a>

                       </NavItem>

                   </NavbarNav>

               </Collapse>

           </Navbar>
           
       )
   }
}

// state
// const mapStateToProps = state => {

//     let result = {}
//     if(state.user.profile.data){
//     result =  {
//       username: state.user.profile.data.username}   
//     }
//   return result
    
// }
  
    
 
export default withRouter(NavbarComponent)

