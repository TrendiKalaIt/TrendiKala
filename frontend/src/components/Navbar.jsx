import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';

export default function App() {
    const navLinks = [
        { name: 'home', path: '/' },
        { name: 'products', path: '/allproducts' },
        { name: 'about', path: '/about' },
        { name: 'manufacturing', path: '/manufacturing' },
    ];

    return (
        <div className="bg-transparent font-inter">
            <Navbar links={navLinks} />
        </div>
    );
}

function Navbar({ links }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="px-4  top-0 left-0 right-0 z-10 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-0">
                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-[80px]">
                        <img src="/trendikala_logo_bg.png" alt="Trendi Kala Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="hidden md:block border-l-2 border-green-700 h-10 mx-3" />
                    <div className="hidden md:block">
                        <span className="block text-green-700 font-semibold text-sm tracking-[.4rem]">TRENDI  KALA</span>
                        <span className="block text-[10px] text-gray-500 mt-1">TRENDS & KALA IN  EVERY STICH</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:ps-44 md:flex space-x-10 lg:space-x-14 text-base font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `transition-colors border-b-2 ${isActive
                                        ? 'text-green-700 border-green-500'
                                        : 'text-gray-700 hover:text-green-700 border-transparent hover:border-green-400'}`
                                }
                            >
                                {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className="flex items-center space-x-4 text-green-700">
                    <NavLink to="/cart">
                        <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-green-500 transition" />
                    </NavLink>
                    <NavLink to="/wishlist">
                        <Heart className="w-6 h-6 cursor-pointer hover:text-green-500 transition" />
                    </NavLink>
                    <Search
                        className="w-6 h-6 cursor-pointer hover:text-green-500 transition"
                        onClick={() => setIsSearchInputOpen(!isSearchInputOpen)}
                    />
                    <User
                        className="w-6 h-6 hidden md:block cursor-pointer hover:text-green-500 transition"
                        onClick={() => navigate('/signin')}
                    />
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6 text-green-700" /> : <Menu className="w-6 h-6 text-green-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 bg-white border-t border-gray-200 shadow-sm">
                    <ul className="flex flex-col space-y-2 px-4 py-3">
                        {links.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive
                                            ? 'bg-green-100 text-green-700'
                                            : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
                                        }`
                                    }
                                >
                                    {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <div
                                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-green-700 cursor-pointer"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/signin');
                                }}
                            >
                                <User className="w-6 h-6 mr-2" />
                                My Account
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            {/* Search Input */}
            {isSearchInputOpen && (
                <div className="px-4 mt-3 pb-2">
                    <input
                        type="text"
                        placeholder="Search products, stories..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 shadow"
                    />
                </div>
            )}
        </nav>

    );
}
