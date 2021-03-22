import React from 'react'
import { FaFire } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from './Button'

function Pricing() {
    return (
        <IconContext.Provider value={{color:'white',size=64}}></IconContext.Provider>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                    </div>
                        <Link to='/sign-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$10</h4>
                                <p>per month</p>
                                <ul>
                                    <li>100</li>
                                    <li>100</li>
                                    <li>100</li>
                                </ul>
                                <Button buttonSize='btn-wide'
                                buttonColor='primary'>Plans </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$10</h4>
                                <p>per month</p>
                                <ul>
                                    <li>100</li>
                                    <li>100</li>
                                    <li>100</li>
                                </ul>
                                <Button buttonSize='btn-wide'
                                buttonColor='primary'>Plans </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <div className="icon">
                                    <FaFire />
                                </div>
                                <h3>Starter</h3>
                                <h4>$10</h4>
                                <p>per month</p>
                                <ul>
                                    <li>100</li>
                                    <li>100</li>
                                    <li>100</li>
                                </ul>
                                <Button buttonSize='btn-wide'
                                buttonColor='primary'>Plans</Button>
                            </div>
                        </Link>
                </div>
            </div>  

        </div>
    )
}

export default Pricing
