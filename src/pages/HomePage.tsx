import React from 'react';
import MainLayout from '../components/MainLayout.tsx';

const HomePage: React.FC = () => {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section
                id="home"
                className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('/react-images/images/iron.jpg')", // Add a smokies photo in your public/images folder
                }}
            >
                <div className="bg-black bg-opacity-50 p-8 rounded-md text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Smokies Hub</h1>
                    <p className="text-lg mb-6">
                        Delicious, freshly grilled smokies delivered to your doorstep.
                    </p>
                    <a
                        href="#about"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="mt-10 px-6 md:px-20 text-center">
                <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-700 mb-6">
                    At Smokies Hub, we specialize in crafting the tastiest smokies you'll
                    ever have! Our smokies are made from the finest ingredients and
                    grilled to perfection, ensuring a satisfying experience every time.
                </p>
                <img
                    src="/react-images/images/iron.jpg"
                    alt="Grilled Smokies"
                    className="rounded-lg shadow-lg mx-auto w-full md:w-1/2"
                />
            </section>

            {/* Featured Products Section */}
            <section id="products" className="mt-16 px-6 md:px-20">
                <h2 className="text-3xl font-semibold mb-4 text-center">Our Smokies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: 'Classic Smokie',
                            price: 'Ksh 100',
                            img: '/react-images/images/loki.jpg',
                        },
                        {
                            name: 'Spicy Smokie',
                            price: 'Ksh 120',
                            img: '/react-images/images/iron.jpg',
                        },
                        {
                            name: 'Cheesy Smokie',
                            price: 'Ksh 150',
                            img: '/react-images/images/iron.jpg',
                        },
                    ].map((product) => (
                        <div
                            key={product.name}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold">{product.name}</h3>
                                <p className="text-gray-500">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </MainLayout>
    );
};

export default HomePage;