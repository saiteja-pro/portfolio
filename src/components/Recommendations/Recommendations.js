import React, { useContext, useRef } from 'react';

import Slider from 'react-slick';

import { FaQuoteLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import { recommendationsData } from '../../data/recommendationsData';

import './Recommendations.css';

function Recommendations() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();

    const settings = {
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        margin: 3,
        loop: true,
        autoplaySpeed: 3000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    };

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    

    return (
        <>
            {recommendationsData.length > 0 && (
                <div
                    className='recommendations'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='recommendations--header'>
                        <h1 style={{ color: theme.secondary }}>Recommendations</h1>
                    </div>
                    <div className='recommendations--body'>
                        <FaQuoteLeft
                            className='quote'
                            style={{ color: theme.secondary }}
                        />
                        <div
                            className='recommendations--slider'
                            style={{ backgroundColor: theme.primary }}
                        >
                            <Slider {...settings} ref={sliderRef}>
                                {recommendationsData.map((each) => (
                                    <div
                                        className='single--recommendation'
                                        key={each.id}
                                    >
                                        <div className='recommendations--container'>
                                            <div
                                                className='review--img'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                }}
                                            >
                                                <img
                                                    src={each.image}
                                                    alt={each.name}
                                                />
                                            </div>
                                            <div
                                                className='review--content'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                    color: theme.tertiary,
                                                }}
                                            >
                                                <p>{each.text}</p>
                                                <h1 onClick={()=> openInNewTab(each.url)}>{each.name}</h1>
                                                <h4>{each.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <button
                                className='prevBtn'
                                onClick={gotoPrev}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowLeft
                                    style={{ color: theme.primary }}
                                    aria-label='Previous recommendation'
                                />
                            </button>
                            <button
                                className='nextBtn'
                                onClick={gotoNext}
                                style={{ backgroundColor: theme.secondary }}
                            >
                                <FaArrowRight
                                    style={{ color: theme.primary }}
                                    aria-label='Next recommendation'
                                />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Recommendations;
