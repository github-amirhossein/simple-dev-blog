import loc from '../img/loc.png'
import phone from '../img/phone.png'
import email from '../img/email.png'



export default function Contact() {
    return (
       <div className='b'>
        <div className="contact">
            <div className="content">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, ut?</p>
            </div>
            <div className="container">
                <div className="contactinfo">
                    <div className="box">
                        <div className="icon"><img src={loc} alt="" /></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p> Shariati St <br />Alley 24, Number 87</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><img src={email} alt="" /></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>amyrhsynshakry4@gmail.com</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon"><img src={phone} alt="" /></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>09363523901</p>
                        </div>
                    </div>



                </div>
                <div className="contactform">
                    <form action="">
                        <h2>Send Meddage</h2>
                        <div className="inputbox">
                            <input type="text" required="required" />
                            <span>Full Name</span>
                        </div>

                        <div className="inputbox">
                            <input type="email" required="required" />
                            <span>Email</span>
                        </div>

                        <div className="inputbox">
                            <textarea name="" required="required"></textarea>
                            <span>Typeyour Message...</span>
                        </div>

                        <div className="inputbox">
                            <input type="submit" value="send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>


       </div>
            
    )}