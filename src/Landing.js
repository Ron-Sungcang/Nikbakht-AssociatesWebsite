import './Landing.css';

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
                        <button className='book-Button'>Book Consultation</button>
                        <button className='upload-Button'>Upload Ticket</button>
                    </div>
                </div>
            </div>
            <div className='fill-Body'>
                <h1 className='fill-Title'>Fill Out The Form</h1>
                <div className='fill-Align'>
                    <div className='fill-Left'>

                    </div>
                    <div className='fill-Right'>
                        <h6>First Name:</h6>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter First Name'
                                />
                        <h6>Last Name:</h6>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Last Name'
                            />
                        <h6>Email Address: </h6>
                            <input className='text-Field'
                                type='text'
                                placeholder='Enter Email Address'
                                />
                        <h6>Leave Me A Message: </h6>
                            <input className='message-Box'
                                type='text'
                                placeholder='Enter Message'
                            />
                        <button className='fill-Button'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}