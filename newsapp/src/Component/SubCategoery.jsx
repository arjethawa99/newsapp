import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider';

const SubCategoery = () => {
    const Authinitaler = useContext(AuthContext);
    // console.log(Authinitaler);
    const styles = {
        backgroundColor: 'lightblue',
    };

    const subCategoeryHandler = (events) => {
        events.target.parentElement.childNodes.forEach((elem) => { elem.style.background = 'lemonchiffon' })
        // console.log(events)
        if (events.target.style.backgroundColor !== "lightblue") {
            events.target.style.background = "lightblue";
        } else {
            events.target.style.background = "lemonchiffon";
        }
        Authinitaler.setcategoryValue(events.target.attributes.id.value);

    }
    return (
        <div className='subcategory_fields'>
            <h1>Sub Category Tab</h1>
            <div className="tab-content">
                <ul>
                    <li id='top' style={styles} onClick={(e) => { subCategoeryHandler(e) }}>latest News(24X7)</li>
                    <li id='sports' onClick={(e) => { subCategoeryHandler(e) }}>Sports</li>
                    <li id="politics" onClick={(e) => { subCategoeryHandler(e) }}>Politics</li>
                    <li id='crime' onClick={(e) => { subCategoeryHandler(e) }}>Crime</li>
                    <li id='business' onClick={(e) => { subCategoeryHandler(e) }}>Business</li>
                    <li id='technology' onClick={(e) => { subCategoeryHandler(e) }}>Technology</li>
                </ul>
            </div>
        </div>
    )
}

export default SubCategoery