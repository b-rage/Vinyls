import React, { Component } from 'react'
import VinylListItem from '../VinylListItem/VinylListItem'
import VinylListCardItem from '../VinylListCardItem/VinylListCardItem'
import UsersGallery from '../UsersGallery/UsersGallery'
import './vinylsList.css'


// Redux
import { connect } from 'react-redux'
import { showVinyls } from '../../actions/vinylsActions'

class VinylsList extends Component {
    
    componentDidMount() {
        this.props.showVinyls()
    }

    render() { 

        const { vinyls } = this.props
        
        return ( 
            <React.Fragment>
                <h2 className='text-center my-5'>Vinyls</h2>
                <div>
                    <UsersGallery></UsersGallery>
                </div>
                <div className='vinyls-list'>
                    <ul className='list-group-flush'>
                    {vinyls.map(vinyl => (
                        <VinylListItem key={vinyl.id} info={vinyl}/>
                    ))}
                    </ul>
                    <div className='list-card'>
                        {vinyls.map(vinyl => (
                            <VinylListCardItem key={vinyl.id} info={vinyl}/>
                        ))}
                    </div>
                </div>
            </React.Fragment>
         )
    }
}

// state
const mapStateToProps = state => ({
    vinyls: state.vinyls.vinyls
})

 
export default connect(mapStateToProps, { showVinyls })(VinylsList)