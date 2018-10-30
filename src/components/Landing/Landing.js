import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'mdbreact'
import  './landing.css'

function Landing(props) {

    return <section className="container-landing">
        
        <div className="container-landing-right">

            <h1 className="landing-title">Vinyl</h1>

            <Link to={'./register'} ><Button color="unique">Register</Button></Link>
            
            {/* <Button color="unique" onClick={props.onRegisterClick}>Register</Button> */}

            <Link to={'./login'}><Button color="unique">Login</Button> </Link>

            {/* <Button color="unique" onClick={props.onLoginClick}>Login</Button>   */}   

        </div>
        
    </section>
}

export default Landing
