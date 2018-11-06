import React, { Component } from 'react'

class Vinyl extends Component {
    
    render() { 
        const { id, nombre } = this.props.info
        return ( 
            <li className='list-group-item'>{nombre}</li>
         )
    }
}
 
export default Vinyl