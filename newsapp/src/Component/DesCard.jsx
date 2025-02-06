import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";  // This is fine if you want to alias it to 'Router'
import ShowMoreDetails from './ShowMoreDetails';

const DesCard = () => {
    const AuthInital = useContext(AuthContext);
    // console.log(AuthInital.intials);
    const screenerDisplay = {
        "display": AuthInital.displayScreener ? "none" : "block"
    }

    const showMoreHandler = (e) => {
        // console.log();
        // window.open(e.target.id)
        AuthInital.setdisplayScreener(true);
    }

    return (
        <BrowserRouter>
            <div className='desCardContainerparent' style={screenerDisplay}>
                <div className='desCardContainer' >
                    {
                        AuthInital.intials === null ? <div className='desCard'><h1>No Data Found</h1></div> : AuthInital.intials.map((element, index) => {
                            const temp = "/" + index
                            return element === undefined ? "" : <div className="card" key={index}>
                                <h3 className="card__title" >
                                    <Link to={temp} style={{ textDecoration: "none" }} onClick={(e)=>{showMoreHandler(e)}}>
                                        {element.title}
                                    </Link>
                                </h3>
                                {/* id={element.link} onClick={(e)=>{showMoreHandler(e)}} */}
                                {/* <p className="card__content">{element.description}</p> */}
                                <div className="card__date">
                                    {element.pubDate}
                                </div>
                                <div className="card__arrow">
                                    <Link to={temp} style={{ textDecoration: "none" }} onClick={(e)=>{showMoreHandler(e)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                                            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <Routes>
                <Route path='/:id' Component={ShowMoreDetails}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default DesCard