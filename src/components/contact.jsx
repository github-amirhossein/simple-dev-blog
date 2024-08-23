


export default function Contact() {
    return (
        <div>
        <div className="contact-us">
        <div className="contaneres">
            <h1>تماس با ما</h1>
            <form action="">
            <div className="row">
                <div className="contact-input">
                    <label >نام و نام خانوادگی : </label>
                    <input id="contact-name" name="name" type="text" />
                </div>

                <div className="contact-input">
                    <label >ایمیل : </label>
                    <input id="contact-email" name="email" type="email"/>
                </div>

                <div className="contact-input">
                    <label >شماره تماس : </label>
                    <input id="contact-phone" name="phone" type="number"/>
                </div>

                <div className="contact-input">
                    <label >موضوع : </label>
                    <input id="contact-subject" name="subject" type="text"/>
                </div>
                

            </div>
            <div className="massage">
            <label className="payam-matn"> : متن پیام</label>
            <textarea name="massage" id="massage"></textarea>
            </div>
            <div className="contact-btn">
                <input type="submit" value="ارسال"/>
            </div>
            </form>
            <hr />
            </div>
            </div>
           














            </div>
            
    )}