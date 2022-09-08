import React from 'react'

// import UI
import Card from '../UI/Card'

//import icons
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer__container'>
                <Card className={'contact__card'}>
                    <MdOutlineEmail className='contact__option-icon' />
                    <h4>Email</h4>
                    <h5>alexisxzinho@hotmail.com</h5>
                    <a href="mailto:alexisxzinho@hotmail.com" target="__blank">Send a message</a>
                </Card>

                <Card className={'contact__card'}>
                    <BsWhatsapp className='contact__option-icon' />
                    <h4>Whatsapp</h4>
                    <h5>+4915209907551</h5>
                    <a href="https://wa.me/+4915209907551" target="__blank">Send a message</a>
                </Card>
            </div>
        </footer>
    )
}

export default Footer