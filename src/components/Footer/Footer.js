import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const getYear = () => {
        return new Date().getFullYear();
    }
    

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            
            <p style={{color: theme.tertiary}}>
                Built with passion by {headerData.name}  
            <br />
            <p style={{textAlign: 'center'}}>copyright © {getYear()} </p>
            </p>
        </div>
    )
}

export default Footer

