// src/components/AddressForm.jsx
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddressForm = ({ token, setShowForm, setSavedAddresses }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        streetAddress: '',
        apartment: '',
        townCity: '',
        state: '',
        phoneNumber: '',
        emailAddress: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
        if (!formData.streetAddress.trim()) errors.streetAddress = 'Street Address is required';
        if (!formData.townCity.trim()) errors.townCity = 'Town/City is required';
        if (!formData.state.trim()) errors.state = 'State is required';
        if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) errors.phoneNumber = 'Invalid Indian phone number';
        if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) errors.emailAddress = 'Invalid email address';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length > 0) {
            Object.values(errors).forEach((err) => toast.error(err));
            return;
        }

        try {
            const axios = await import('axios');
            await axios.default.post('/api/addresses/save', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            toast.success('Address saved!');
            setShowForm(false);
            setFormData({
                fullName: '',
                streetAddress: '',
                apartment: '',
                townCity: '',
                state: '',
                phoneNumber: '',
                emailAddress: '',
            });

            // Refresh address list
            const res = await axios.default.get('/api/addresses/my', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSavedAddresses(res.data.addresses || []);
        } catch {
            toast.error('Failed to save address.');
        }
    };

    return (
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            {[
                ['fullName', 'Full Name*'],
                ['streetAddress', 'Street Address*'],
                ['apartment', 'Apartment, floor, etc. (optional)'],
                ['townCity', 'Town/City*'],
                ['state', 'State*'],
                ['phoneNumber', 'Phone Number*'],
                ['emailAddress', 'Email Address*'],
            ].map(([id, label]) => (
                <div key={id}>
                    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                    <input
                        type={id === 'emailAddress' ? 'email' : 'text'}
                        id={id}
                        value={formData[id]}
                        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                        className={`w-full px-3 py-2 border ${formErrors[id] ? 'border-red-500' : 'border-gray-300'} rounded-md bg-green-50`}
                    />
                    {formErrors[id] && <p className="text-sm text-red-500 mt-1">{formErrors[id]}</p>}
                </div>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
                Save Address
            </button>
        </form>
    );
};

export default AddressForm;
