import React, { useContext } from 'react'
import '../App.css'
import { AuthContext } from '../context/AuthProvider'


const HeaderNav = () => {
    const AuthHeader = useContext(AuthContext)
    // console.log(AuthHeader);
    // AuthHeader.intials["results"]

    const searchTexter = (event) => {
        AuthHeader.setsearchUpdate(event.target.value);
    }

    return (
        <div className='headerBarNav'>
            <div className="logoName">
                NewsApp
            </div>
            <div className="headlines">
                Top Headlines
            </div>
            <div className="searchBar">
                <div className="constrain">
                    <input className="input-elevated" type="text" placeholder="Search" onChange={(e) => { searchTexter(e) }} disabled={AuthHeader.displayScreener}/>
                </div>
            </div>

        </div>
    )
}

export default HeaderNav