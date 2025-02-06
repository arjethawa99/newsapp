import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [intials, setintials] = useState(null);
    const [categoryValue, setcategoryValue] = useState('top');
    const [searchupdate, setsearchUpdate] = useState('');

    const [displayScreener, setdisplayScreener] = useState(false)
    
   
    useEffect(() => {
        axios.get('https://newsdata.io/api/1/latest?category=' + categoryValue + '&country=in&apikey=pub_68171a0876fe5bd9033d83053c99d84d9d6d3').then((response) => {
            if (searchupdate !== "") {
                const tempRes = response.data.results.map((element)=>{
                    if(element.title.includes(searchupdate)){
                        return element
                    }
                })
                setintials(tempRes);
            }else{
                setintials(response.data.results);
            }
            
        }).catch((err) => {
            console.log(err)
        })
    }, [categoryValue,searchupdate])


    return (
        <AuthContext.Provider value={{ intials, setcategoryValue,setsearchUpdate,displayScreener, setdisplayScreener }}>
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default AuthProvider