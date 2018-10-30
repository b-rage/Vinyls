import React, { Component } from 'react'
import VinylListItem from '../VinylListItem/VinylListItem'

// Redux
import { connect } from 'react-redux'
import { showVinyls } from '../../actions/vinylsActions'

class Vinyls extends Component {
    
    componentDidMount() {
        this.props.showVinyls()
    }

    render() { 

        const { vinyls } = this.props
        
        return ( 
            <React.Fragment>
                <h2 className='text-center my-5'>Vinyls</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <ul>
                        {vinyls.map(vinyl => (
                            <VinylListItem key={vinyl.id} info={vinyl}/>
                        ))}
                        </ul>
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

 
export default connect(mapStateToProps, { showVinyls })(Vinyls)