import './Contact.css';
import logo from './logo.svg';

export const Contact = () => {

    return (
        <>
        <div className='contact-Body'>
            <div className='contact-Container'>

            </div>
            <div className='bot-Body'>
                <div className='bot-Logo'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='bot-Align'>
                    <div className='bot-Left'>

                    </div>
                    <div className='bot-Separator'></div>
                    <div className='bot-Middle'>
                        <h1 className='bot-Header'> Services   </h1>
                    </div>
                    <div className='bot-Right'>
                        <h1 className='bot-Header'>  Company  </h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}