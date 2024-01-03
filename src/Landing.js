import './Landing.css';
import XLogo from './logo-white.png';
import YLogo from './youtubeIcon.png';
import {Link} from 'react-router-dom';

export const Landing = () => {

    return (
        <>
        <div className='main-Body'>
            <div className='quick-Body'>
                <div className='quick-Container'>
                    <h1 className='quick-Title'>Need Help With Legal Matters In Saskatchewan?</h1>
                    <p className='quick-Para'>
                        <h3 className='para-Sentence'>We are the people AND Wwe is a cool sport, </h3>
                        <h3 className='para-Sentence'>you heard here first and foremost my guy</h3>
                    </p>
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
                <div className='social-Left'>
                    <h2>Socials:</h2>
                </div>
                <div className='social-Main'>
                    <a href='https://www.youtube.com/@trafficticket/featured'>
                        <button className='social-Button'><img src={YLogo} className='social-Icon'></img></button>
                    </a>
                    <a href='https://twitter.com/Codennik'>
                        <button className='social-Button'><img src={XLogo} className='social-Icon'></img></button>
                    </a>
                </div>
            </div>
            <div className='fill-Body'>
                <h1 className='fill-Title'>Contact Me Today</h1>
                <div className='fill-Align'>
                    <div className='fill-Left'>
                        <h3 className='font-Left'>Schedule A Consultation, Ask A Question Or Drop A Message.  </h3>
                        <h3 className='font-Left'>Any Legal Matter You Might Not Be Sure About Is Welcome.</h3>
                    </div>
                    <div className='fill-Right'>
                        <h3 className='form-Title'> Fill The Form! </h3>
                        <div className='align-Text'>
                        <h3 className='font-Type'>First Name:</h3>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter First Name'
                                />
                                </div>
                                <div className='align-Text'>
                        <h3 className='font-Type'>Last Name: </h3>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Last Name'
                            />
                            </div>
                            <div className='align-Text'>
                        <h3 className='font-Type'>Email Address: </h3>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Email Address'
                                />
                                </div>
                                <div className='align-Message'>
                        <h3 className='font-Type'>Leave Me A Message: </h3>
                            <textarea className='message-Box'
                            placeholder='Enter Message'
                            />
                            </div>
                        <button className='fill-Button'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}