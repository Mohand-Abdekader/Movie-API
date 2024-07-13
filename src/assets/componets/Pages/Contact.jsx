import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact(){
    const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_w5j3yga', 'template_vy4oeye', e.target, 'LpsMR4MH2qVDzYTT5',)
            .then(() => {
                Swal.fire({
                    title: "Sent!",
                    text: "Email Sent Successfully !",
                    icon: "success"
                  });}),
                (error) => {
                console.log('FAILED...', error.text);}}
            
    return ( <>
    
    <header className="container bg-dark rounded-2 py-4 text-center text-white w-50 mx-auto my-5">
                <h2>Contact us</h2>
            </header>
            <form onSubmit={sendEmail} className=" container form-control">
            <div className="mb-3 f">
                <label className="form-label">Name</label>
                <input type="text" name="user_name" className="form-control" placeholder="your Name" />
                </div>
            <div className="mb-3 f">
                <label className="form-label">Email address</label>
                <input type="email" name="user_email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Your Massage</label>
                    <textarea className="form-control" name="message" rows="3"></textarea>
                    </div>
                    <input type="submit" value="Send" className='btn btn-dark my-3' />
                    </form>
    </> );
}

export default Contact;