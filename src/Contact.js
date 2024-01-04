import './Contact.css';
import PLogo from './phone-logo.png';
import MLogo from './mail-logo.png';
import XLogo from './logo-white.png';
import YLogo from './youtubeIcon.png';
import {useState} from 'react';

export const Contact = () => {
    const [getName, setName] = useState('');
    const [getPhone, setPhone] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getMessage, setMessage] = useState('');

    return (
        <>
        <div className='contact-Body'>
            <div className='contact-Container'>
                <div className='title-Container'>
                    <h2 className='contact-Title'>Contact Coden Nikbakht</h2>
                </div>
                <div className='body-contain'>
                    <div className='contact-Left'>
                        <div className='contact-TopL'>
                            <div className='contact-Contacts'>
                                <div className='contact-Align'>
                                    <img src={PLogo} className='social-Icon' alt='PLogo'></img>
                                    <h1 className='contacts-Text'> Phone # placeholder </h1>
                                </div>
                                <div className='contact-Align'>
                                    <img src={MLogo} className='social-Icon' alt='MLogo'></img>
                                    <h1 className='contacts-Text'> codennik95@gmail.com</h1>
                                </div>
                            </div>
                            <div className='contact-Socials'>
                                <a href='https://www.youtube.com/@trafficticket/featured'>
                                    <button className='social-Button'><img src={YLogo} className='social-Icon' alt='YLogo'></img></button>
                                </a>
                                <a href='https://twitter.com/Codennik'>
                                    <button className='social-Button'><img src={XLogo} className='social-Icon' alt='XLogo'></img></button>
                                </a>
                            </div>
                        </div>
                        <div className='contact-BotL'>
                            <h1 className='contact-Title'>CODEN PICTURE HERE</h1>
                        </div>
                    </div>
                    <div className='contact-Right'>
                        <h2 className='form-Contact'> Need Help With A Legal Matter In Saskatchewan? Let's Start Right Way!</h2>
                        <div className='align-Text'>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Name'
                                value={getName}
                                onChange={e => setName(e.target.value)}
                                />
                                </div>
                                <div className='align-Text'>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Phone No.'
                                value={getPhone}
                                onChange={e => setName(e.target.value)}
                            />
                            </div>
                            <div className='align-Text'>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Email Address'
                                value={getEmail}
                                onChange={e => setEmail(e.target.value)}
                                />
                                </div>
                                <div className='align-Message'>
                            <textarea className='message-Box'
                            placeholder='Enter Message'
                            value={getMessage}
                            onChange={e => setEmail(e.target.value)}
                            />
                            </div>
                        <button className='contact-Button' onClick = {e => {
                            fetch('/email',{ 
                                method: 'POST',
                                body:`recepient=${getName}&phoneNo=${getPhone}&email=${getEmail}&message=${getMessage}`,
                                headers: {'Content-type':'application/x-www-form-urlencoded'}})
                                .then(response => response.json())
                                .then(alert(`Email Sent!`));
                        }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}