import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleHobbie.css'


function SingleHobbie({id, title, icon}) {

    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-hobbie" style={{backgroundColor:theme.primary400}}>
                <div className="hobbie-content"  style={{color:theme.tertiary}}>
                    <i className="hobbie-icon" style={{color:theme.secondary}}>{icon}</i>
                    <h4  style={{color:theme.secondary}}>{title}</h4>  
                </div>         
            </div>
        </Fade>
    )
}

export default SingleHobbie
