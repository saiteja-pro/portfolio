import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import { AiOutlineFolder } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({id, title, details, date, field, image, url}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        achievementCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
                cursor: 'pointer',
            },
        },
    }));

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
      

    const classes = useStyles();
    return (
        <Fade bottom>
           <div key={id} className={`achievement-card ${classes.achievementCard}`} >
               <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h3 style={{color: theme.tertiary}} onClick={() => openInNewTab(url)}>{title}</h3>
                        <p style={{color: theme.tertiary80}}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{color: theme.primary}}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h6>{field}</h6>
                        </div>   
                    </div>
                </div> 
                <div className="achievecard-imgcontainer">
                    <img src={image} alt="" />
                </div>
           </div>
        </Fade>
        
    )
}

export default AchievementCard
