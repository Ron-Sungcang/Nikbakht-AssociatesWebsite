import './Landing.css';
import XLogo from './logo-white.png';
import YLogo from './youtubeIcon.png';
import {Link} from 'react-router-dom';
import gif from './CodenGif.gif';
import {useState} from 'react';

export const Landing = (props) => {
    const [getName, setName] = useState('');
    const [getPhone, setPhone] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getMessage, setMessage] = useState('');

    return (
        <>
        <div className='main-Body' style={{
                    backgroundImage: "url("+gif+")",
                    backgroundSize: "cover",
                    minHeight:"20%",
                    minWidth:"50%",
                    overlay:true,
                    backgroundPosition: "center center"}}>
            <div className='quick-Body'>
                <div className='quick-Container'>
                    <h1 className='quick-Title'>Need Help With Legal Matters In Saskatchewan?</h1>
                    <div className='quick-Para'>
                        <h3 className='para-Sentence'>Step confidently onto the road to justice with Nikbakht Law, 
                        your dedicated ally in navigating the complexities of traffic law.  Known for our unwavering commitment to securing favorable outcomes, 
                        we are here to safeguard your rights and guide you through every twist and turn on the legal highway.</h3>
                    </div>
                    <div className='quick-Buttons'>
                        <a href='https://ticketgone.cliogrow.com/book/d66b31c6530714be2c4b38e05d15360b' className='book-Ref'>
                            <button className='book-Button'> Book Consultation </button>
                        </a>
                        <a href='https://ticketgone.cliogrow.com/intake/7be6c79b52a8b24779d5d349c4c22318' className='upload-Ref'>
                            <button className='upload-Button'>Upload Ticket </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='social-Body'>
                <div className='social-Main'>
                    <a href='https://www.youtube.com/@trafficticket/featured'>
                        <button className='social-Button'><img src={YLogo} className='social-Icon' alt='YLogo'></img></button>
                    </a>
                    <a href='https://twitter.com/Codennik'>
                        <button className='social-Button'><img src={XLogo} className='social-Icon' alt='XLogo'></img></button>
                    </a>
                </div>
            </div>
            <div className='fill-Body'>
                <h1 className='fill-Title'>Contact Us Today</h1>
                <div className='fill-Align'>
                    <div className='fill-Left'>
                        <h3 className='font-Title'>Our Specialty, Traffic Ticket Defense  </h3>
                        <h3 className='font-Left'>We are experienced in:</h3>
                        <div className='smaller-Container'>
                        <h1 className='font-Left-Smaller'>
                        Cross Examining Crown witnesses, including police officers</h1>
                        <h1 className='font-Left-Smaller'>
                        Preparing and presenting your matter at trial</h1>
                        <h1 className='font-Left-Smaller'>
                        Saving your driver insurance rating, including points</h1>
                        <h1 className='font-Left-Smaller'>
                        Safeguarding your right to drive</h1>
                        <h1 className='font-Left-Smaller'>
                        Keeping your doing record as clean as possible (low insurance rates)</h1>
                        </div>
                        <h3 className='font-Left'>
                        We are highly experienced agents in traffic matters in the Province of Saskatchewan.
                        This includes navigating the legal system, understanding the law, and dealing with the various levels of Justice Saskatchewan in providing advocacy to our clients.</h3>
                    </div>
                    <div className='fill-Right'>
                        <h3 className='form-Title'> Let's Get Your Case Resolved Together </h3>
                        <div className='align-Text'>
                        <h3 className='font-Type'>Name:</h3>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Your Name'
                                value={getName}
                                onChange={e => setName(e.target.value)}
                                />
                                </div>
                                <div className='align-Text'>
                        <h3 className='font-Type'>Phone Number: </h3>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Phone Number'
                                value={getPhone}
                                onChange={e => setPhone(e.target.value)}
                            />
                            </div>
                            <div className='align-Text'>
                        <h3 className='font-Type'>Email Address: </h3>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Email Address'
                                value={getEmail}
                                onChange={e => setEmail(e.target.value)}
                                />
                                </div>
                                <div className='align-Message'>
                        <h3 className='font-Type'>Leave Me A Message: </h3>
                            <textarea className='message-Box'
                            placeholder='Enter Message'
                            value={getMessage}
                            onChange={e => setMessage(e.target.value)}
                            />
                            </div>
                        <button className='fill-Button' onClick = {e => {
                            fetch('/email', {
                                method: 'POST',
                                body:`recipient=${getName}&phoneNo=${getPhone}&email=${getEmail}&message=${getMessage}`,
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