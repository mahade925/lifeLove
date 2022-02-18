import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className="mt-40 mb-40">
            <h1 className='josefins-sans text-2xl mb-4'>Our Shop</h1>
            <h1 className='josefins-sans text-4xl mt-2 mb-14'>SPECIAL PRODUCT FOR YOU</h1>
            <div className="grid grid-cols-4 gap-8 w-8/12 m-auto">
                <div className='image-box'>
                    <img className='shop-img duration-300' src="https://images.unsplash.com/photo-1594816935907-1e8f03b98437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGdvd258ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button className='btn'>Add To Cart</button>
                    <h1 className='text-2xl mt-4 cursor-pointer font-semibold poppins hover:text-blue-500 duration-100'>Wedding Gown</h1>
                    <h1 className='text-xl mt-4 '>$500</h1>
                </div>
                <div className='image-box'>
                    <img className='shop-img duration-300' src="https://images.unsplash.com/photo-1561702856-b4ec96854ed8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VkZGluZyUyMGNha2V8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button className='btn'>Add To Cart</button>
                    <h1 className='text-2xl mt-4 cursor-pointer font-semibold poppins hover:text-blue-500 duration-100'>Wedding Cake</h1>
                    <h1 className='text-xl mt-4 '>$600</h1>
                </div>
                <div className='image-box duration-300'>
                    <img className='shop-img' src="https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGZsb3dlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button className='btn'>Add To Cart</button>
                    <h1 className='text-2xl mt-4 cursor-pointer font-semibold poppins hover:text-blue-500 duration-100'>Wedding Flower</h1>
                    <h1 className='text-xl mt-4 '>$300</h1>
                </div>
                <div className='image-box'>
                    <img className='shop-img duration-300' src="https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <button className='btn'>Add To Cart</button>
                    <h1 className='text-2xl mt-4 cursor-pointer font-semibold poppins hover:text-blue-500 duration-100'>Wedding Suits</h1>
                    <h1 className='text-xl mt-4 '>$800</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;