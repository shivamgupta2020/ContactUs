import React, { useState, useEffect } from 'react';
import './landpage.css';
import miss from './miss.webp';

function Landpage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [query, setQuery] = useState({
        firstname: "",
        lastname: "",
        email: "",
        terms: ""
    });

    const handleParam = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
            formData.append(key, value);
        });
        fetch("https://getform.io/f/lbkmjorb", {
            method: "POST",
            body: formData
        }).then(() => setQuery({ name: "", email: "", terms: "" }));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (event.target.className.includes('modal')) {
            closeModal();
        }
    };

    const [isActive, setActive] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            window.addEventListener('click', handleOutsideClick);
        } else {
            window.removeEventListener('click', handleOutsideClick);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, [isModalOpen]);

    return (
        <div className="landpage">
            <div className="landpage-container">
                <div className="left">
                    <div className="text">
                        <div className="red-line">AWARD WINNING</div>
                        <h1 style={{ fontFamily: 'Mytupi', fontSize: '60px', lineHeight: '80px', marginTop: 0, marginBottom: '25px' }}>DIGITAL MARKETING AGENCY</h1>
                        <p style={{ marginBottom: '40px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur voluptates ducimus numquam vitae nostrum animi fugiat, accusantium necessitatibus perspiciatis ut vel atque maiores. Sed ipsam atque esse officia suscipit.
                        </p>
                        <button id='contact-us' onClick={openModal}>CONTACT US</button>
                    </div>
                </div>
                <div className="right">
                    <img src={miss} alt="My Image" id='miss-image' />
                </div>
            </div>

            <div className={`modal ${isModalOpen ? 'show' : ''}`}>
                <div className="modal-content">
                    <span className="close-button" onClick={closeModal}>&times;</span>
                    <h2 style={{ fontFamily: "Mytupi", paddingBottom:"30px" }}>Talk to Us</h2>
                    <form onSubmit={formSubmit} className='form'>
                        <div>
                            {isActive && <div className="error" onClick={() => setActive(false)}>Email</div>}

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                className="form-control"
                                value={query.email}
                                onChange={handleParam()}
                                onClick={() => setActive(true)}
                            />
                        </div>
                        <div className="name-form">
                            <div style={{flex:"45%"}}>
                            {isActive && <div className="error" onClick={() => setActive(false)}>First Name</div>}
                                <input
                                    type="text"
                                    name="firstname"
                                    required
                                    placeholder="First Name"
                                    className="form-control"
                                    value={query.name}
                                    onChange={handleParam()}
                                />
                            </div>
                            <div style={{flex:"45%"}}>
                            {isActive && <div className="error" onClick={() => setActive(false)}>Last Name</div>}

                                <input
                                    type="text"
                                    name="lastname"
                                    required
                                    placeholder="Last Name"
                                    className="form-control"
                                    value={query.name}
                                    onChange={handleParam()}
                                />
                            </div>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" id="terms" name="terms" value={query.name} onChange={handleParam()}></input>
                            <label htmlFor="terms">I agree to Fyle's terms and conditions, and provide consent to sent me communication</label>
                        </div>

                        <button type="submit" id='contact-us' onClick={closeModal} style={{width:"100%"}}>CONTACT US</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Landpage;
