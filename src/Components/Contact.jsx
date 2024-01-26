import React from 'react'

const Contact = () => {
  return (
    <div className='Contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
            <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" name='Name' id='Name' required placeholder='abc'/>
            </div>
            <div>
                <label htmlFor="Email">email:</label>
                <input type="text" name='Email' id='Email' required placeholder='@abcGmail.com'/>
            </div>
            <div>
                <label htmlFor="Message">Message:</label>
                <input type="text" name='Message' id='Message' required placeholder='Tell us about your query'/>
            </div>
            <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;