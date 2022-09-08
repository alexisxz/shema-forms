import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import './home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="container home__container">
                <div className="home__container-left">
                    <Footer />
                </div>
                <h2>Language</h2>
                <div className="home__container-right">
                    <Link to='/de' className='btn lg'>Deutsch</Link>
                    <Link to='/en' className='btn lg'>English</Link>
                    <Link to='/sq' className='btn lg'>Shqip</Link>
                    <Link to='/pt' className='btn lg'>Português</Link>
                </div>
                <div className="home__container-logo">
                    <h4>S H E M A  -  G R U P P E</h4>
                </div>
            </div>
        </section>
    )
}

export default Home