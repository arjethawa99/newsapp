import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../App.css'

const ShowMoreDetails = () => {

    const AuthShowmoreDetails = useContext(AuthContext);
    // console.log(AuthShowmoreDetails.intials);
    const { id } = useParams();
    const navigate = useNavigate();
    const tempindex = AuthShowmoreDetails.intials == null ? {} : AuthShowmoreDetails.intials[id];

    const [clicked, setClicked] = useState(false);

    // Toggle the clicked state on icon click
    const handleIconClick = (e) => {
        e.preventDefault();
        const nextId = parseInt(id) - 1; // Go to next item
        if (AuthShowmoreDetails.intials[nextId] !== undefined) {
            navigate(`/${nextId}`);
        } else {
            const nextStep = AuthShowmoreDetails.intials.length - 1;
            navigate(`/${nextStep}`)
        }
        setClicked(!clicked);
    };
    const handleIconClickRight = (e) => {
        e.preventDefault();
        const nextId = parseInt(id) + 1; // Go to next item
        if (AuthShowmoreDetails.intials[nextId] !== undefined) {
            navigate(`/${nextId}`);
        } else {
            navigate(`/0`)
        }
        setClicked(!clicked);
    };

    const screenerDisplay = {
        "display": AuthShowmoreDetails.displayScreener ? "block" : "none"
    }
    // AuthShowmoreDetails.setdisplayScreener("none");

    return (
        <>
            <div className="mainChildrenContain" style={screenerDisplay}>
                <div className="mainContainer">
                    <div className={`icon-container ${clicked ? 'clicked' : ''}`}
                        onClick={(e) => { handleIconClick(e) }}>
                        <FontAwesomeIcon icon={faArrowLeft} size='2x'></FontAwesomeIcon>
                    </div>
                    {
                        AuthShowmoreDetails.intials !== "null" ? <div>
                            <div className="container">
                                <h1 className="title">{tempindex.title}</h1>
                                <p className="description">{tempindex.description}</p>

                                {/* Conditionally render an image or a video based on the mediaType */}
                                {tempindex.image_url !== null ? (
                                    <img className="media" src={tempindex.image_url} alt="Media content" />
                                ) : tempindex.video_url !== null ? (
                                    <video className="media" controls>
                                        <source src={tempindex.video_url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : null}
                            </div>
                        </div> : ""
                    }
                    <div className={`icon-container ${clicked ? 'clicked' : ''}`}
                        onClick={(e) => { handleIconClickRight(e) }}>
                        <FontAwesomeIcon icon={faArrowRight} size='2x'></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowMoreDetails