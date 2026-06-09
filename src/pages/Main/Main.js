import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Recommendations, Blog, Education, Experience, Contacts, Hobbies, Achievement, Projects, Volunteering, Youtube } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div id="main">
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Achievement />
            <Youtube />
            <Volunteering />
            <Skills />

            <Hobbies />
            <Recommendations />
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
