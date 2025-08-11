import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Header Section */}
            <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white">
                <h1 className="text-3xl font-bold">AI Ad Genius</h1>
                <nav className="space-x-4">
                    <a href="#features" className="hover:underline">Features</a>
                    <a href="#pricing" className="hover:underline">Pricing</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center h-screen text-center p-6">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Make Your Ads Profitable with AI</h2>
                <p className="text-lg mb-6">Leverage the power of AI to generate creatives and landing pages that convert.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition-all duration-300">Get Started</button>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-gray-100">
                <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold">AI-Powered Creatives</h4>
                        <p className="mt-2">Generate stunning ad creatives that attract your audience.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold">Optimized Landing Pages</h4>
                        <p className="mt-2">Create landing pages designed for maximum conversions.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold">Performance Analytics</h4>
                        <p className="mt-2">Track and optimize your ad performance with ease.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-6">
                <h3 className="text-3xl font-bold text-center mb-10">Pricing Plans</h3>
                <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h4 className="text-xl font-semibold">Basic Plan</h4>
                        <p className="mt-2">$19/month</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300">Choose Plan</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h4 className="text-xl font-semibold">Pro Plan</h4>
                        <p className="mt-2">$49/month</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300">Choose Plan</button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h4 className="text-xl font-semibold">Enterprise Plan</h4>
                        <p className="mt-2">Contact Us</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300">Contact Sales</button>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="contact" className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2023 AI Ad Genius. All rights reserved.</p>
                <p>Follow us on social media!</p>
            </footer>
        </div>
    );
};

export default LandingPage;