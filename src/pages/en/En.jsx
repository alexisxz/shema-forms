import React from 'react'
import { Link } from 'react-router-dom'
import './en.css'
import Logo from '../../assets/white_logo.png'
import Card from '../../UI/Card'

//icons
import { MdOutlineSick } from 'react-icons/md'
import { TbBeach } from 'react-icons/tb'
import { AiOutlineFieldTime } from 'react-icons/ai'

const En = () => {
    return (
        <div className="en">
            <Link to='/' className="logo">
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <div className="container en__container">
                <h2>Requests</h2>
                <div className="en__container-requests">
                    <Card className={'contact__card'}>
                        <MdOutlineSick className='contact__option-icon' />
                        <h4>Sickness request</h4>
                        <h5>Form</h5>
                        <a href="https://forms.gle/nfUqZJBbdaMk4CPU9" target="__blank">Fill up</a>
                    </Card>

                    <Card className={'contact__card'}>
                        <TbBeach className='contact__option-icon' />
                        <h4>Vacation request</h4>
                        <h5>Form</h5>
                        <a href="/en" target="__blank">Fill up</a>
                    </Card>

                    <Card className={'contact__card'}>
                        <AiOutlineFieldTime className='contact__option-icon' />
                        <h4>Extra time request</h4>
                        <h5>Form</h5>
                        <a href="/en" target="__blank">Fill up</a>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default En