import React from 'react'
import './style.css'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className='header'>
            <div>
                <div>
                    <img src={require('./image/logo.png')} style={{height:'30px'}} alt="" />
                </div>
                <div className='menuItems'>
                    <div className='navigationMenuBox'>
                        <p>Study Destinations</p>
                        <p>Services</p>
                        <p>Company</p>
                        <p>Upcoming Events</p>
                        <button className='navigationBtn'>
                            Course Finder
                        </button> 
                    </div>

                </div>
                <div className='breadCrumbs'>
                    <p><IoMdMenu /> </p>
                </div>
            </div>
        </div>
    )
}

export default Navbar