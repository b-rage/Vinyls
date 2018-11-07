import React, { Component } from 'react'
import VinylsList from '../VinylsList/VinylsList'

// Redux
import { connect } from 'react-redux'
import { getCurrentUser } from '../../actions/usersActions'

class Index extends Component {
    componentDidMount() {
        this.props.getCurrentUser()
    }
    render() { 
        return ( 
            <VinylsList></VinylsList>
         )
    }
}

// state
const mapStateToProps = state => ({
    profile: state.profile
})

 
export default connect(mapStateToProps, { getCurrentUser })(Index)
