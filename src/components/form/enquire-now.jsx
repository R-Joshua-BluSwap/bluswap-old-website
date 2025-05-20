import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios if not already installed

const EnquireNowForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '' // Adding message field (even if empty)
    });

    // Error state
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    // API state
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState('');

    // Success state
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Timer state (seconds remaining)
    const [timeRemaining, setTimeRemaining] = useState(7);

    // Handle timer countdown effect
    useEffect(() => {
        let timer;

        if (isSubmitted) {
            // Set initial timer value
            setTimeRemaining(7);

            // Start countdown
            timer = setInterval(() => {
                setTimeRemaining(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        // Cleanup timer on component unmount or when submission state changes
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [isSubmitted]);

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });

        // Clear error when user starts typing
        if (formErrors[id]) {
            setFormErrors({
                ...formErrors,
                [id]: ''
            });
        }
    };

    // Validate form
    const validateForm = () => {
        let errors = {};
        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
            isValid = false;
        }

        // Email validation
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                errors.email = 'Please enter a valid email address';
                isValid = false;
            }
        }

        // Phone validation
        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
            isValid = false;
        } else {
            const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
            if (!phoneRegex.test(formData.phone)) {
                errors.phone = 'Please enter a valid phone number';
                isValid = false;
            }
        }

        // Company validation
        if (!formData.company.trim()) {
            errors.company = 'Company name is required';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');

        if (validateForm()) {
            try {
                setIsLoading(true);
                
                // Call your API endpoint
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}api/v1/google-ads-lead`, 
                    formData
                );
                
                console.log('Form submitted successfully', response.data);
                setIsSubmitted(true);
                
                // Reset form after successful submission
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        message: ''
                    });
                    setIsSubmitted(false);
                }, 7000);
            } catch (error) {
                console.error('Error submitting form:', error);
                setApiError(
                    error.response?.data?.message || 
                    'There was an error submitting your form. Please try again.'
                );
            } finally {
                setIsLoading(false);
            }
        } else {
            console.log('Form has errors');
        }
    };

    return (
        <div className="enquire-form bg-white p-3 p-md-4 rounded-2xl shadow">
            <h4 className="mb-4 fw-bold mt-1">Connect with bluSwap</h4>
            {isSubmitted ? (
                <div className="alert alert-success" role="alert">
                    <p className="text-center">Thank you for your submission! We&apos;ll be in touch soon.</p>
                    <div className="fs-4 text-center mt-2">
                        {timeRemaining}
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="my-2" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Name</label>
                        <input
                            type="text"
                            className={`form-control style-form-input shadow-sm ${formErrors.name ? 'is-invalid' : ''}`}
                            id="name"
                            placeholder="Jone Deo"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            className={`form-control style-form-input shadow-sm ${formErrors.email ? 'is-invalid' : ''}`}
                            id="email"
                            placeholder="work@example.com"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label fw-semibold">Phone</label>
                        <input
                            type="tel"
                            className={`form-control style-form-input shadow-sm ${formErrors.phone ? 'is-invalid' : ''}`}
                            id="phone"
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="company" className="form-label fw-semibold">Company</label>
                        <input
                            type="text"
                            className={`form-control style-form-input shadow-sm ${formErrors.company ? 'is-invalid' : ''}`}
                            id="company"
                            placeholder="bluSwap"
                            value={formData.company}
                            onChange={handleChange}
                        />
                        {formErrors.company && <div className="invalid-feedback">{formErrors.company}</div>}
                    </div>

                    {apiError && (
                        <div className="alert alert-danger" role="alert">
                            {apiError}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="px-5 py-2 btn btn-green fw-bold mt-md-2"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default EnquireNowForm;