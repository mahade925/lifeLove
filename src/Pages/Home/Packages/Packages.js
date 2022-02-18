import React from 'react';
import './Packages.css'

const Packages = () => {
    return (
        <div>
            <h1 className='josefins-sans text-2xl mb-4'>Pricing</h1>
            <h1 className='josefins-sans text-4xl mt-2 mb-32'>WEDDING PACKAGES</h1>
            <div class="grid grid-cols-3 gap-10 w-8/12 m-auto">
                <div className='package-card bg-white cursor-pointer pb-10'>
                    <div className='img-container'>
                        <img src="https://images.unsplash.com/photo-1599799045670-b6a30c133f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className='drop-shadow-xl rounded-full package-img' />
                    </div>
                    <h1 className='text-2xl mb-4'>BASIC PACKAGE</h1>
                    <h1 className='text-4xl mb-8'>$250<span className='text-xl'>/monthly</span></h1>
                    <hr className='mb-8' />
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Stylish makeup for bride</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Top label arrengement</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Amazing meal & breakfast</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Manicure & Pedicure</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Full body Polish</h1>
                    <button className='text-xl font-semibold mt-8 border-b-2 py-2 border-black hover:text-blue-500 hover:border-blue-500 duration-200'>Choose Package</button>
                </div>
                <div className='package-card bg-white cursor-pointer pb-10'>
                    <div className='img-container'>
                        <img src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80" alt="" className='drop-shadow-xl rounded-full package-img' />
                    </div>
                    <h1 className='text-2xl mb-4'>STANDARD PACKAGE</h1>
                    <h1 className='text-4xl mb-8'>$550<span className='text-xl'>/monthly</span></h1>
                    <hr className='mb-8' />
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Stylish makeup for bride</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Top label arrengement</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Amazing meal & breakfast</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Manicure & Pedicure</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Full body Polish</h1>
                    <button className='text-xl font-semibold mt-8 border-b-2 py-2 border-black hover:text-blue-500 hover:border-blue-500 duration-200'>Choose Package</button>
                </div>
                <div className='package-card bg-white cursor-pointer pb-10'>
                    <div className='img-container'>
                        <img src="https://images.unsplash.com/photo-1625799260621-1c7a848ac76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80" alt="" className='drop-shadow-xl rounded-full package-img' />
                    </div>
                    <h1 className='text-2xl mb-4'>PREMIUM PACKAGE</h1>
                    <h1 className='text-4xl mb-8'>$850<span className='text-xl'>/monthly</span></h1>
                    <hr className='mb-8' />
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Stylish makeup for bride</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Top label arrengement</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Amazing meal & breakfast</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Manicure & Pedicure</h1>
                    <h1 className='text-xl my-4 text-gray-600 hover:text-black'>Full body Polish</h1>
                    <button className='text-xl font-semibold mt-8 border-b-2 py-2 border-black hover:text-blue-500 hover:border-blue-500 duration-200'>Choose Package</button>
                </div>
            </div>
        </div>
    );
};

export default Packages;