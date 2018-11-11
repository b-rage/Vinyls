import React, { Component } from 'react'
import './vinylListCardItem.css'

class VinylListCardItem extends Component {
    
    render() { 
        const { name, artist, imageUrl } = this.props.info
        return ( 
            
              <div className="card">
                <div className="card-image">
                  <img src={imageUrl}/>
                  <span className="card-title">{name}</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
                </div>
                <span className="vinyl-name-card">{name}</span>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>

         )
    }
}
 
export default VinylListCardItem