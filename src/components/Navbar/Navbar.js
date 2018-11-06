import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact'
import { withRouter } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'
import { getCurrentUser } from '../../actions/usersActions'


class NavbarComponent extends Component {

    state = {
        collapse: false,
        isWideEnough: false,
    }


    componentDidMount() {
    this.props.getCurrentUser()
    console.log(this.props.user)
    }

   onClickNav = () => this.setState({ collapse: !this.state.collapse })


    
   render() {
       const { username }= this.props

       return (
           <Navbar color="black darken-4" dark expand="md"  scrolling>

               <NavbarBrand href="/index">

                   <strong>Vinyls</strong>

               </NavbarBrand>

               { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClickNav } />}

               <Collapse isOpen = { this.state.collapse } navbar>

                   <NavbarNav right>

                       <NavItem >

                           <a className="nav-link waves-effect waves-light" onClick = { this.goToFavourites } ><i className="fa fa-star"></i>{username}</a>

                       </NavItem>

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
const mapStateToProps = state => ({
    user: state.user.user.data
    
    
})

 
export default connect(mapStateToProps, { getCurrentUser })(NavbarComponent)

