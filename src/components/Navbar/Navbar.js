import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact'
import { withRouter } from 'react-router-dom'




class NavbarComponent extends Component {

       state = {
           collapse: false,
           isWideEnough: false,
       }

  


   onClickNav = () => this.setState({ collapse: !this.state.collapse })


   render() {
       return (
           <Navbar color="black darken-4" dark expand="md"  scrolling>

               <NavbarBrand href="/index">

                   <strong>Vinyl</strong>

               </NavbarBrand>

               { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClickNav } />}

               <Collapse isOpen = { this.state.collapse } navbar>

                   <NavbarNav right>

                       <NavItem >

                           <a className="nav-link waves-effect waves-light" onClick = { this.goToFavourites } ><i className="fa fa-star"></i> Profile</a>

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

export default withRouter(NavbarComponent);