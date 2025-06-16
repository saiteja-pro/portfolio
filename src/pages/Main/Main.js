import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Recommendations, Blog, Education, Experience, Contacts, Hobbies, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Experience />
            <Education />
            <Achievement />
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
