import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/contactus.scss";
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar />

                <section id="contact-details" className="section-p1">
                    <div className="details">
                        <span>GET IN TOUCH</span>
                        <h2>Visit one of our agency locations or contact us today</h2>
                        <h3><b>Head Office</b></h3>
                        <div>
                            <li>
                                <p>
                                    Chandigarh-Patiala National Highway (NH- 64 Village Jansla,
                                    Rajpura, Punjab 140401
                                </p>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <p>clothify_contact@gmail.com</p>
                            </li>
                            <li>
                                <i className="fas fa-phone-alt"></i>
                                <p>044 4561 4700</p>
                            </li>
                            <li>
                                <i className="far fa-clock"></i>
                                <p>Monday to Saturday: 9:00am to 4:00pm</p>
                            </li>
                        </div>
                    </div>
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751343148626!2d76.6597778!3d30.516086499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1708517767814!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
                <Footer />
            </>
        );
    }
}

export default ContactUs;