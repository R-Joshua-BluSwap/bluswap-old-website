import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EnquireNowForm = () => {
    const router = useRouter();
    
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
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

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });

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

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            errors.name = 'Name must be at least 2 characters';
            isValid = false;
        }

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
                console.log('Submitting form...'); // Debug log
                
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}api/v1/google-ads-lead`, 
                    formData
                );
                
                console.log('Form submitted successfully', response.data);
                
                // Immediately redirect to thank you page without showing success message
                router.push('/thank-you').catch((error) => {
                    console.error('Redirect failed:', error);
                    window.location.href = '/thank-you';
                });
                
            } catch (error) {
                console.error('Error submitting form:', error);
                setApiError(
                    error.response?.data?.message || 
                    'There was an error submitting your form. Please try again.'
                );
                setIsLoading(false);
            }
        } else {
            console.log('Form validation failed');
        }
    };

    // Alternative: Immediate redirect (you can use this instead of the timer approach)
    const handleSubmitWithImmediateRedirect = async (e) => {
        e.preventDefault();
        setApiError('');

        if (validateForm()) {
            try {
                setIsLoading(true);
                console.log('Submitting form with immediate redirect...');
                
                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}api/v1/google-ads-lead`, 
                    formData
                );
                
                console.log('Form submitted successfully', response.data);
                
                // Immediately redirect to thank you page
                router.push('/thank-you').catch((error) => {
                    console.error('Immediate redirect failed:', error);
                    window.location.href = '/thank-you';
                });
                
            } catch (error) {
                console.error('Error submitting form:', error);
                setApiError(
                    error.response?.data?.message || 
                    'There was an error submitting your form. Please try again.'
                );
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="enquire-form bg-white p-3 p-md-4 rounded-2xl shadow">
            <h4 className="mb-4 fw-bold mt-1">Connect with bluSwap</h4>
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
        </div>
    );
};

export default EnquireNowForm;

