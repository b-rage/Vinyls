import React, { Component } from 'react'
import './vinylListItem.css'

class VinylListItem extends Component {
    
    render() { 
        const { name, artist } = this.props.info
        return ( 
            <li className='list-group-item'><span className='vinyl-name' >{name}</span> - {artist}</li>
         )
    }
}
 
export default VinylListItem