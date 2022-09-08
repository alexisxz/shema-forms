import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/white_logo.png'
import Card from '../../UI/Card'

//icons
import { MdOutlineSick } from 'react-icons/md'
import { TbBeach } from 'react-icons/tb'
import { AiOutlineFieldTime } from 'react-icons/ai'

//pages
import Home from './pages/home/Home'
import De from './pages/de/De'
import En from './pages/en/En'

//components

const App = () => {
    return (
        <>
            <div className="de">
                <Link to='/' className="logo">
                    <img src={Logo} alt="Nav Logo" />
                </Link>
                <div className="container de__container">
                    <h2>Anfragen</h2>
                    <div className="de__container-requests">
                        <Card className={'contact__card'}>
                            <MdOutlineSick className='contact__option-icon' />
                            <h4>Krank</h4>
                            <h5>Formular</h5>
                            <a href="https://forms.gle/QzPSL8MagS2b7BG56" target="__blank">Füllen</a>
                        </Card>

                        <Card className={'contact__card'}>
                            <TbBeach className='contact__option-icon' />
                            <h4>Urlaub</h4>
                            <h5>Formular</h5>
                            <a href="/en" target="__blank">Füllen</a>
                        </Card>

                        <Card className={'contact__card'}>
                            <AiOutlineFieldTime className='contact__option-icon' />
                            <h4>Extra Zeit</h4>
                            <h5>Formular</h5>
                            <a href="/en" target="__blank">Füllen</a>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}

export default App