import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";




function ContactForm() {
    
        const [errorMessage, setErrorMessage] = useState("");

        // could also be const [formState, setFormState] = useState({ name: "", email: "", message: "" });
        const [formState, setFormState] = useState(
            {
                name: "",
                email: "",
                message: ""
            }
        );

        const { name, email, message } = formState;

        function handleChange(e) {
        
            if (e.target.name === "email") {

                const isValid = validateEmail(e.target.value);
                console.log(isValid);

                if (!isValid) {
                
                    setErrorMessage("Your email is invalid.");
                
                } else {
        
                    setErrorMessage("");
                    
                }
                
            } else {

                if (!e.target.value.length) {

                    setErrorMessage(`${e.target.name} is required`);

                } else {

                    setErrorMessage("");

                }

            }

            
            if (!errorMessage) {

                setFormState({...formState, [e.target.name]: e.target.value});

            }

            console.log("errorMessage", errorMessage);
        
        }

        function handleSubmit(e) {

            e.preventDefault();
            console.log(formState);

        }
        

        return (
            <section className="contact">

                <h3>Contact me</h3>
                <form id="contact-form" onSubmit={handleSubmit}>
                    
                    <div>
                        {/* <label htmlFor="name">Name</label><br /> */}
                        <input type="text" defaultValue={name} onBlur={handleChange} placeholder="enter Name" name="name" />
                    </div>

                    <div>
                        {/* <label htmlFor="email">Email address</label><br /> */}
                        <input type="email" defaultValue={email} onBlur={handleChange} placeholder="enter Email Address" name="email" />
                    </div>

                    <div>
                        {/* <label htmlFor="message">Message</label><br /> */}
                        <textarea defaultValue={message} onBlur={handleChange} placeholder="enter Message" name="message" rows="5" />
                    </div>

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    <button data-testid="button" type="submit">Submit</button>
                </form>
            
            </section>
        )

}


export default ContactForm;