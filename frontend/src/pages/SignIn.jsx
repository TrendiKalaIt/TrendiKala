import axios from 'axios';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            // Save token to localStorage
            localStorage.setItem('token', response.data.token);

            // Navigate to dashboard or homepage
            navigate('/'); // change route as needed

        } catch (error) {
            console.error('Login failed:', error.response?.data?.message || error.message);
            alert(error.response?.data?.message || 'Login failed');
        }
    };


    return (
        <div className="h-full bg-gray-50 flex flex-col items-center pt-8 px-4 mb-2">
            {/* Header */}
            <header className="w-full max-w-6xl flex flex-col  items-center justify-between px-4 mb-10">
                <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <div className="w-[100px] sm:w-[120px]">
                            <img
                                src="/trendikala_logo_bg.png"
                                alt="Trendi Kala Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="hidden md:block border-l-2 border-green-700 h-20 px-2" />
                        <div className="hidden md:block">
                            <span className="block text-green-700 tracking-[1.2rem] text-xl sm:text-2xl">TRENDI <br /> KALA</span>
                            <span className="block text-sm text-gray-500 mt-1">TRENDS & KALA BY EVERY DESIGN</span>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-700 text-sm sm:text-base pt-5">
                    <a href="#" className="hover:text-green-700">Women</a>
                    <a href="#" className="hover:text-green-700">New In</a>
                    <a href="#" className="hover:text-green-700">Clothing</a>
                    <a href="#" className="hover:text-green-700">Custom Request</a>
                    <a href="#" className="hover:text-green-700">Personal Shopper</a>
                </nav>
            </header>

            <div className="border w-full max-w-6xl mb-2"></div>

            {/* Form Container */}
            <div className="w-full max-w-xl bg-white p-4 md:p-10 rounded-lg shadow-sm">
                <h2 className="text-2xl pt-2 font-semibold text-[#93A87E] mb-6 border-b-2 border-[#93A87E] pb-2 inline-block">
                    SIGN IN
                </h2>

                <form onSubmit={handleLogin}>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#35894E] text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border-2 border-[#35894e75] rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-[#35894E]"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-[#35894E] text-sm font-medium mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="w-full border-2 border-[#35894e75] rounded py-2 px-3 pr-10 text-gray-700 focus:outline-none focus:border-[#35894E]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <a href="#" className="text-sm text-green-600 hover:text-[#93A87E] mt-2 inline-block">
                            Forgot your password?
                        </a>
                    </div>

                    {/* Submit */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#93A87E] hover:bg-[#93a87eae] text-white font-bold py-2 px-6 rounded-full transition"
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>

                <div className="border mt-8"></div>

                {/* Signup Link */}
                <div className="mt-8 text-center">
                    <p className="text-[#35894E] mb-4">Don't have an account?</p>
                    <button
                        type="button"
                        className="w-full border border-[#35894E] text-[#35894E] font-bold py-2 px-6 rounded-full hover:bg-green-50 transition"
                        onClick={() => navigate('/signup')}
                    >
                        CREATE ACCOUNT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
