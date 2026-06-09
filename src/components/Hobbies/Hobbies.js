import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { hobbiesData } from '../../data/hobbiesData';

import './Hobbies.css'
import SingleHobbie from './SingleHobbie/SingleHobbie';

function Hobbies() {

    const { theme } = useContext(ThemeContext);
    return (
        <>
            {hobbiesData.hobbies.length > 0 && (
                <div className="hobbies" id="hobbies" style={{backgroundColor:theme.secondary}}>
                    <div className="hobbies-header">
                        <h1 style={{color: theme.primary}}>Hobbies</h1>
                    </div>
                    <div className="hobbies-body">
                        <p style={{color:theme.tertiary80}}>
                            {hobbiesData.description}
                        </p>
                        <div className="hobbies-bodycontainer">
                            {hobbiesData.hobbies.map(each => (
                                <SingleHobbie
                                key={each.id}
                                id={each.id}
                                title={each.title}
                                icon={each.icon}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
       </>
    )
}

export default Hobbies
